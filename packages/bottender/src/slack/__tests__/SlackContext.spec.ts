import warning from 'warning';
import { SlackOAuthClient as SlackClient } from 'messaging-api-slack';

import SlackContext from '../SlackContext';
import SlackEvent from '../SlackEvent';

jest.mock('messaging-api-slack');
jest.mock('warning');

const VIEW_PAYLOAD = {
  id: 'VMHU10V25',
  teamId: 'T8N4K1JN',
  type: 'modal',
  title: {
    type: 'plain_text',
    text: 'Quite a plain modal',
  },
  submit: {
    type: 'plain_text',
    text: 'Create',
  },
  blocks: [
    {
      type: 'input',
      blockId: 'a_block_id',
      label: {
        type: 'plain_text',
        text: 'A simple label',
        emoji: true,
      },
      optional: false,
      element: {
        type: 'plain_text_input',
        actionId: 'an_action_id',
      },
    },
  ],
  privateMetadata: 'Shh it is a secret',
  callbackId: 'identify_your_modals',
  externalId: '',
  state: {
    values: [],
  },
  hash: '156772938.1827394',
  clearOnClose: false,
  notifyOnClose: false,
};

const messageRawEvent = {
  type: 'message',
  user: 'U13AGSN1X',
  text: 'Experience is the best teacher.',
  ts: '1500435914.425136',
  channel: 'C6A9RJJ3F',
  eventTs: '1500435914.425136',
};

const threadRawEvent = {
  type: 'message',
  channel: 'C6A9RJJ3F',
  user: 'U056KAAAA',
  text: 'in a thread',
  ts: '1515480368.000083',
  sourceTeam: 'T056KAAAA',
  team: 'T056KAAAA',
  threadTs: '1515479974.000115',
};

const userSession = {
  user: {
    id: 'fakeUserId',
  },
  channel: {
    id: 'C6A9RJJ3F',
  },
};
const setup = ({ session: _session, rawEvent: _rawEvent } = {}) => {
  const session = _session === undefined ? userSession : _session;
  const rawEvent = _rawEvent === undefined ? messageRawEvent : _rawEvent;
  const client = new SlackClient();

  client.chat = {
    postMessage: jest.fn(),
    postEphemeral: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    meMessage: jest.fn(),
    getPermalink: jest.fn(),
    scheduleMessage: jest.fn(),
    deleteScheduledMessage: jest.fn(),
    unfurl: jest.fn(),
    scheduledMessages: {
     