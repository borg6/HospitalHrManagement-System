import { TelegramClient } from 'messaging-api-telegram';

import Bot, { OnRequest } from '../bot/Bot';
import SessionStore from '../session/SessionStore';

import TelegramConnector, {
  TelegramConnectorOptions,
} from './TelegramConnector';
import TelegramContext from './TelegramContext';
import TelegramEvent from './TelegramEvent';
import { PollingOptions, TelegramRequestBody } from './TelegramTypes';

export default class TelegramBot extends Bot<
  TelegramRequestBody,
  TelegramClient,
  TelegramEvent,
  TelegramContext
> {
  _offset: number | null;

  _shouldGetUpdates: boolean;

  constructor({
    sessionStore,
    sync,
    onRequest,
    ...connectorOptions
  }: TelegramConnectorOptions & 