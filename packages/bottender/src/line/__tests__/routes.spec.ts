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
  things: {
    deviceId: 't2c449c9d1...',
    type: 'link',
  },
});

const lineEventThingsUnlink = new LineEvent({
  type: 'things',
  replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
  mode: 'active',
  timestamp: 1462629479859,
  source: {
    type: 'user',
    userId: 'U91eeaf62d...',
  },
  things: {
    deviceId: 't2c449c9d1...',
    type: 'unlink',
  },
});

const lineEventThingsScenarioResult = new LineEvent({
  type: 'things',
  replyToken: '0f3779fba3b349968c5d07db31eab56f',
  source: {
    userId: 'uXXX',
    type: 'user',
  },
  mode: 'active',
  timestamp: 1547817848122,
  things: {
    type: 'scenarioResult',
    deviceId: 'tXXX',
    result: {
      scenarioId: 'XXX',
      revision: 2,
      startTime: 1547817845950,
      endTime: 1547817845952,
      resultCode: 'success',
      bleNotificationPayload: 'AQ==',
      actionResults: [
        {
          type: 'binary',
          data: '/w==',
        },
      ],
    },
  },
});

async function Action(context) {
  await context.sendText('hello');
}

async function expectRouteMatchContext({ route, context }) {
  const Router = router([route]);

  const app = run(Router);

  context.sendText = jest.fn();

  await app(context);

  expect(context.sendText).toBeCalledWith('hello');
}

async function expectRouteMatchLineEvent({ route, event }) {
  const context = new LineContext({
    client: {} as any,
    event,
  });

  await expectRouteMatchContext({
    route,
    context,
  });
}

async function expectRouteNotMatchContext({ route, context }) {
  const Router = router([route]);

  const app = run(Router);

  context.sendText = jest.fn();

  await app(context);

  expect(context.sendText).not.toBeCalledWith('hello');
}

async function expectRouteNotMatchLineEvent({ route, event }) {
  const context = new LineContext({
    client: {} as any,
    event,
  });

  await expectRouteNotMatchContext({
    route,
    context,
  });
}

class TestContext extends Context {
  get platform() {
    return 'test';
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendText() {}
}

describe('#line', () => {
  it('should call action when it receives a line event', async () => {
    await expectRouteMatchLineEvent({
      route: line(Action),
      event: lineEventTextMessage,
    });
  });

  it('should not call action when it receives a non-line event', async () => {
    await expectRouteNotMatchContext({
      route: line(Action),
      context: new TestContext({
        client: {} as any,
        event: {},
      }),
    });
  });

  describe('#line.any', () => {
    it('should call action when it receives a line event', async () => {
      await expectRouteMatchLineEvent({
        route: line.any(Action),
        event: lineEventTextMessage,
      });
    });

    it('should not call action when it receives a non-line event', async () => {
      await expectRouteNotMatchContext({
        route: line.any(Action),
        context: new TestContext({
          client: {} as any,
          event: {},
        }),
      });
    });
  });

  describe('#line.message', () => {
    it('should call action when it receives a line message event', async () => {
      await expectRouteMatchLineEvent({
        route: line.message(Action),
        event: lineEventTextMessage,
      });
    });

    it('should not call action when it receives a non-message event', async () => {
      await expectRouteNotMatchLineEvent({
        route: line.message(Action),
        event: lineEventFollow,
      });
    });
  });

  describe('#line.follow', () => {
    it('should call action when it receives a line follow event', async () => {
      await expectRouteMatchLineEvent({
        route: line.follow(Action),
        event: lineEventFollow,
      });
    });

    it('should not call action when it receives a non-follow event', async () => {
      await expectRouteNotMatchLineEvent({
        route: line.follow(Action),
        event: lineEventUnfollow,
      });
    });
  });

  describe('#line.unfollow', () => {
    it('should