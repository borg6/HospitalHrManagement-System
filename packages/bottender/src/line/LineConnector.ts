import crypto from 'crypto';
import { EventEmitter } from 'events';

import invariant from 'invariant';
import warning from 'warning';
import { JsonObject } from 'type-fest';
import { LineClient } from 'messaging-api-line';

import Session from '../session/Session';
import { Connector } from '../bot/Connector';
import { RequestContext } from '../types';

import LineContext from './LineContext';
import LineEvent from './LineEvent';
import { LineRawEvent, LineRequestBody, LineRequestContext } from './LineTypes';

type CommonConnectorOptions = {
  getConfig?: GetConfigFunction;
  getSessionKeyPrefix?: GetSessionKeyPrefixFunction;
  shouldBatch?: boolean;
  sendMethod?: string;
  skipLegacyProfile?: boolean;
};

type Credential = { accessToken: string; channelSecret: string };

type GetConfigFunction = ({
  params,
}: {
  params: Record<string, string>;
}) => Credential | Promise<Credential>;

export type GetSessionKeyPrefixFunction = (
  event: LineEvent,
  requestContext?: RequestContext
) => string;

type CredentialOptions =
  | Credential
  | {
      getConfig: GetConfigFunction;
    };

type ConnectorOptionsWithoutClient = CredentialOptions & {
  origin?: string;
} & CommonConnectorOptions;

type ConnectorOptionsWithClient = {
  client: LineClient;
  channelSecret: string;
} & CommonConnectorOptions;

export type LineConnectorOptions =
  | ConnectorOptionsWithoutClient
  | ConnectorOptionsWithClient;

export default class LineConnector
  implements Connector<LineRequestBody, LineClient>
{
  _client: LineClient | undefined;

  _channelSecret: string | undefined;

  _origin: string | undefined;

  _skipLegacyProfile: boolean;

  _getConfig: GetConfigFunction | undefined;

  _getSessionKeyPrefix: GetSessionKeyPrefixFunction | undefined;

  _shouldBatch: boolean;

  /**
   * @deprecated
   */
  _sendMethod: string;

  constructor(options: LineConnectorOptions) {
    const {
      getConfig,
      shouldBatch,
      sendMethod,
      skipLegacyProfile,
      getSessionKeyPrefix,
    } = options;
    if ('client' in options) {
      this._client = options.client;

      this._channelSecret = options.channelSecret;
    } else {
      const { origin } = options;
      if ('getConfig' in options) {
        this._getConfig = getConfig;
      } else {
        const { accessToken, channelSecret } = options;
        invariant(
          accessToken,
          'LINE access token is required. Please make sure you have filled it correctly in your `bottender.config.js` or `.env` file.'
        );
        invariant(
          channelSecret,
          'LINE channel secret is required. Please make sure you have filled it correctly in your `bottender.config.js` or the `.env` file.'
        );

        this._client = new LineClient({
          accessToken,
          channelSecret,
          origin,
        });

        this._channelSecret = channelSecret;
      }

      this._origin = origin;
    }

    this._shouldBatch = typeof shouldBatch === 'boolean' ? shouldBatch : true;
    warning(
      !sendMethod || sendMethod === 'reply' || sendMethod === 'push',
      'sendMethod should be one of `reply` or `push`'
    );

    if (sendMethod) {
      warning(
        false,
        '`sendMethod` is deprecated. The value will always be `reply` in v2.'
      );
      this._sendMethod = sendMethod;
    } else {
      this._sendMethod = 'reply';
    }

    this._getSessionKeyPrefix = getSessionKeyPrefix;

    this._skipLegacyProfile =
      typeof skipLegacyProfile === 'boolean' ? skipLegacyProfile : true;
  }

  _isWebhookVerifyEvent(event: LineRawEvent): boolean {
    return (
      'replyToken' in event &&
      (event.replyToken === '00000000000000000000000000000000' ||
        event.replyToken === 'ffffffffffffffffffffffffffffffff')
    );
  }

  isWebhookVerifyRequest(body: LineRequestBody): boolean {
    return (
      body &&
      Array.isArray(body.events) &&
      body.events.length > 0 &&
      body.events.every(this._isWebhookVerifyEvent)
    );
  }

  get platform(): 'line' {
    return 'line';
  }

  get client(): LineClient | undefined {
    return this._client;
  }

  getUniqueSessionKey(
    bodyOrEvent: LineRequestBody | LineEvent,
    requestContext?: RequestContext
  ): string {
    const rawEvent =
      bodyOrEvent instanceof LineEvent
        ? bodyOrEvent.rawEvent
        : bodyOrEvent.events[0];

    let prefix = '';
    if (this._getSessionKeyPrefix) {
      const event =
        bodyOrEvent instanceof LineEvent
          ? bodyOrEvent
          : new LineEvent(rawEvent, { destination: bodyOrEvent.destination });

      prefix = this._getSessionKeyPrefix(event, requestContext);
    }

    const { source } = rawEvent;

    if (source.type === 'user') {
      return `${prefix}${source.userId}`;
    }
    if (source.type === 'group') {
      return `${prefix}${source.groupId}`;
    }
    if (source.type === 'room') {
      return `${prefix}${source.roomId}`;
    }
    throw new TypeError(
      'LineConnector: sender type should be one of user, group, room.'
    );
  }

  async updateSession(
    session: Session,
    bodyOrEvent: LineRequestBody | LineEvent
  ): Promise<void> {
    const rawEvent =
      bodyOrEvent instanceof LineEvent
        ? bodyOrEvent.rawEvent
        : bodyOrEvent.events[0];

    const { source } = rawEvent;

    if (!session.type) {
      session.type = source.type;
    }

    if (source.type === 'group') {
      let user = null;

      if (source.userId) {
        user =
          this._skipLegacyProfile || !this._client
            ? {
                id: source.userId,
                _updatedAt: new Date().toISOString(),
              }
            : {
                id: source.userId,
                _updatedAt: new Date().toISOString(),
                ...(await this._client.getGroupMemberProfile(
                  source.groupId,
                  source.userId
                )),
              };
      }

      session.user = user;

      let memberIds: string[] = [];

      try {
        if (this._client) {
          memberIds = await this._client.getAllGroupMemberIds(source.groupId);
        }
      } catch (err) {
        // FIXME: handle no memberIds
        // only LINE@ Approved accounts or official accounts can use this API
        // https://developers.line.me/en/docs/messaging-api/reference/#get-group-member-user-ids
    