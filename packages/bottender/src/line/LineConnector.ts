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
          'LI