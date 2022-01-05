import { EventEmitter } from 'events';

import invariant from 'invariant';
import { JsonObject } from 'type-fest';
import { TelegramClient } from 'messaging-api-telegram';

import Session from '../session/Session';
import { Connector } from '../bot/Connector';

import TelegramContext from './TelegramContext';
import TelegramEvent from './TelegramEvent';
import {
  TelegramRawEvent,
  TelegramRequestBody,
  TelegramRequestContext,
} from './TelegramTypes';

type ConnectorOptionsWithoutClient = {
  accessToken: string;
  origin?: string;
  skipLegacyProfile?: boolean;
};

type ConnectorOptionsWithClient = {
  client: TelegramClient;
  skipLegacyProfile?: boolean;
};

export type TelegramConnectorOptions =
  | ConnectorOptionsWithoutClient
  | ConnectorOptionsWithClient;

export default class TelegramConnector
  implements Connector<TelegramRequestBody, TelegramClient>
{
  _client: TelegramClient;

  _skipLegacyProfile: boolean;

  constructor(options: TelegramConnectorOptions) {
    const { skipLegacyProfile } = options;
    if ('client' in options) {
      this._client = options.client;
    } else {
      const { accessToken, origin } = options;

      invariant(
        options.accessToken,
        'Telegram access token is required. Please make sure you have filled it correctly in `bottender.config.js` or `.env` file.'
      );

      this._client = new TelegramClient({
        accessToken,
        origin,
      });
    }

    this._skipLegacyProfile =
      typeof skipLegacyProfile === 'boolean' ? skipLegacyProfile : true;
  }

  _getRawEventFromRequest(body: TelegramRequestBody): TelegramRawEvent {
    return body;
  }

  get platform(): 'telegram' {
    return 'telegram';
  }

  get client(): TelegramClient {
    return this._client;
  }

  getUniqueSessionKey(body: TelegramRequestBody): string {
    if (body.message) {
      return `${body.message.chat.id}`;
    }
    if (body.editedMessage) {
      return `${body.editedMessage.chat.id}`;
    }
    if (body.channelPost) {
      return `${body.channelPost.chat.id}`;
    }
    if (body.editedChannelPost) {
      return `${body.editedChannelPost.chat.id}`;
    }
    if (body.inlineQuery) {
      return `${body.inlineQuery.from.id}`;
    }
    if (body.chosenInlineResult) {
      return `${body.chosenInlineResult.from.id}`;
    }
    if (body.callbackQuery) {
      if (body.callbackQuery.message) {
        return `${body.callbackQuery.message.chat.id}`;
      }
      return `${body.callbackQuery.from.id}`;
    }
    if (body.shippingQuery) {
      return `${body.shippingQuery.from.id}`;
    }
    if (body.preCheckoutQuery)