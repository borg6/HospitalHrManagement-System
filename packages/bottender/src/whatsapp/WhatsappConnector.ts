import crypto from 'crypto';
import { EventEmitter } from 'events';

import { JsonObject } from 'type-fest';

import Session from '../session/Session';
import { Connector } from '../bot/Connector';
import { RequestContext } from '../types';

import TwilioClient from './TwilioClient';
import WhatsappContext from './WhatsappContext';
import WhatsappEvent from './WhatsappEvent';
import { WhatsappRequestBody, WhatsappRequestContext } from './WhatsappTypes';

type ConnectorOptionsWithoutClient = {
  accountSid: string;
  authToken: string;
  phoneNumber: string;
  origin?: string;
};

type ConnectorOptionsWithClient = {
  client: TwilioClient;
  origin?: string;
};

export type WhatsappConnectorOptions =
  | ConnectorOptionsWithoutClient
  | ConnectorOptionsWithClient;

function getExpectedTwilioSignature(
  authToken: string,
  url: string,
  params: Record<string, string> = {}
) {
  const data = Object.keys(params)
    .sort()
    .reduce((acc, key) => acc + key + params[key], url);