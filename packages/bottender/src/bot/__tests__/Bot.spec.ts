
import { mocked } from 'ts-jest/utils';

import Bot from '../Bot';
import MemorySessionStore from '../../session/MemorySessionStore';
import { Connector } from '../Connector';

jest.mock('../../session/MemorySessionStore');

const event = {
  rawEvent: {
    message: {
      text: 'hi',
    },
  },
  isMessage: true,
  isText: true,
  message: {
    text: 'hi',
  },
};

const session = {
  user: {
    id: '__id__',
  },
};

const body = {};

const requestContext = {
  method: 'post',
  path: '/webhooks/messengr',
  query: {},