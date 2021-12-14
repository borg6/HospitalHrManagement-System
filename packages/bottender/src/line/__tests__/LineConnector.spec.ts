import warning from 'warning';
import { LineClient } from 'messaging-api-line';
import { mocked } from 'ts-jest/utils';

import LineConnector, { GetSessionKeyPrefixFunction } from '../LineConnector';
import LineContext from '../LineContext';
import LineEvent from '../LineEvent';
import { LineRequestBody } from '../LineTypes';

jest.mock('messaging-api-line');
jest.mock('warning');

const ACCESS_TOKEN = 'FAKE_TOKEN';
const CHANNEL_SECRET = 'FAKE_SECRET';

const requestBody: LineRequestBody = {
  destination: 'Uea8667adaf43586706170ff25ff47ae6',
  events: [
    {
      replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
      type: 'message',
      mode: 'active',
      timestamp: 1462629479859,
      source: {
        type: 'user',
        userId: 'U206d25c2ea6bd87c17655609a1c37cb8',
      },
      message: {
        id: '325708',
        type: 'text',
        text: 'Hello, world',
      },
    },
    {
      replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
      type: 'follow',
      mode: 'active',
      timestamp: 1462629479859,
      source: {
        type: 'user',
        userId: 'U206d25c2ea6bd87c17655609a1c37cb8',
      },
    },
  ],
};

const webhookVerifyRequestBody: LineRequestBody = {
  destination: 'Uea8667adaf43586706170ff25ff47ae6',
  events: [
    {
      replyToken: '00000000000000000000000000000000',
      type: 'message',
      mode: 'active',
      timestamp: 1513065174862,
      source: {
        type: 'user',
        userId: 'Udeadbeefdeadbeefdeadbeefdeadbeef',
      },
      message: {
        id: '100001',
        type: 'text',
        text: 'Hello, world',
      },
    },
    {
      replyToken: 'ffffffffffffffffffffffffffffffff',
      type: 'message',
      mode: 'active',
      timestamp: 1513065174862,
      source: {
        type: 'user',
        userId: 'Udeadbeefdeadbeefdeadbeefdeadbeef',
      },
      message: {
        id: '100002',
        type: 'sticker',
        packageId: '1',
        stickerId: '1',
      },
    },
  ],
};

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mocked(LineClient).mockClear();
});

function setup({
  sendMethod,
  skipLegacyProfile,
  getSessionKeyPrefix,
}: {
  sendMethod?: string;
  skipLegacyProfile?: boolean;
  getSessionKeyPrefix?: GetSessionKeyPrefixFunction;
} = {}) {
  const connector = new LineConnector({
    accessToken: ACCESS_TOKEN,
    channelSecret: CHANNEL_SECRET,
    sendMethod,
    skipLegacyProfile,
    getSessionKeyPrefix,
  });

  const client = mocked(LineClient).mock.instances[0];

  return {
    client,
    connector,
  };
}

describe('#platform', () => {
  it('should be line', () => {
    const { connector } = setup();

    expect(connector.platform).toBe('line');
  });
});

describe('#client', () => {
  it('should be the client', () => {
    const { connector, client } = setup();

    expect(connector.client).toBe(client);
  });

  it('support using custom client', () => {
    const client = new LineClient({
      accessToken: ACCESS_TOKEN,
      channelSecret: CHANNEL_SECRET,
    });
    const connector = new LineConnector({
      client,
      channelSecret: CHANNEL_SECRET,
    });

    expect(connector.client).toBe(client);
  });
});

describe('#getUniqueSessionKey', () => {
  it('extract userId from the HTTP body', () => {
    const { connector } = setup();
    const senderId = connector.getUniqueSessionKey(requestBody);

    expect(senderId).toBe('U206d25c2ea6bd87c17655609a1c37cb8');
  });

  it('extract userId from user source', () => {
    const { connector } = setup();

    const senderId = connector.getUniqueSessionKey(
      new LineEvent({
        replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
        type: 'message',
        mode: 'active',
        timestamp: 1462629479859,
        source: {
          type: 'user',
          userId: 'U206d25c2ea6bd87c17655609a1c37cb8',
        },
        message: {
          id: '325708',
          type: 'text',
          text: 'Hello, world',
        },
      })
    );

    expect(senderId).toBe('U206d25c2ea6bd87c17655609a1c37cb8');
  });

  it('extract groupId from the group source', () => {
    const { connector } = setup();