import Context from '../../context/Context';
import LineContext from '../LineContext';
import LineEvent from '../LineEvent';
import line from '../routes';
import router from '../../router';
import { run } from '../../bot/Bot';

const lineEventTextMessage = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'message',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
  message: {
    id: '325708',
    type: 'text',
    text: 'Hello, world!',
  },
});

const lineEventFollow = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'follow',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
});

const lineEventUnfollow = new LineEvent({
  type: 'unfollow',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
});

const lineEventJoin = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'join',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'group',
    groupId: 'C4af4980629...',
  },
});

const lineEventLeave = new LineEvent({
  type: 'leave',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'group',
    groupId: 'C4af4980629...',
  },
});

const lineEventMemberJoined = new LineEvent({
  replyToken: '0f3779fba3b349968c5d07db31eabf65',
  type: 'memberJoined',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'group',
    groupId: 'C4af4980629...',
  },
  joined: {
    members: [
      {
        type: 'user',
        userId: 'U4af4980629...',
      },
      {
        type: 'user',
        userId: 'U91eeaf62d9...',
      },
    ],
  },
});

const lineEventMemberLeft = new LineEvent({
  type: 'memberLeft',
  mode: 'active',
  timestamp: 1462629479960,
  source: {
    type: 'group',
    groupId: 'C4af4980629...',
  },
  left: {
    members: [
      {
        type: 'user',
        userId: 'U4af4980629...',
      },
      {
        type: 'user',
        userId: 'U91eeaf62d9...',
      },
    ],
  },
});

const lineEventPostback = new LineEvent({
  type: 'postback',
  replyToken: 'b60d432864f44d079f6d8efe86cf404b',
  source: {
    userId: 'U91eeaf62d...',
    type: 'user',
  },
  mode: 'active',
  timestamp: 1513669370317,
  postback: {
    data: 'storeId=12345',
    params: {
      datetime: '2017-12-25T01:00',
    },
  },
});

const lineEventBeaconEnter = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'beacon',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
  beacon: {
    hwid: 'd41d8cd98f',
    type: 'enter',
  },
});

const lineEventBeaconBanner = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'beacon',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
  beacon: {
    hwid: 'd41d8cd98f',
    type: 'banner',
  },
});

const lineEventBeaconStay = new LineEvent({
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  type: 'beacon',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U4af4980629...',
  },
  beacon: {
    hwid: 'd41d8cd98f',
    type: 'stay',
  },
});

const lineEventAccountLink = new LineEvent({
  type: 'accountLink',
  mode: 'active',
  replyToken: 'b60d432864f44d079f6d8efe86cf404b',
  source: {
    userId: 'U91eeaf62d...',
    type: 'user',
  },
  timestamp: 1513669370317,
  link: {
    result: 'ok',
    nonce: 'xxxxxxxxxxxxxxx',
  },
});

const lineEventThingsLink = new LineEvent({
  type: 'things',
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U91eeaf62d...',
  },
