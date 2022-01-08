import Context from '../../context/Context';
import ViberContext from '../ViberContext';
import ViberEvent from '../ViberEvent';
import router from '../../router';
import viber from '../routes';
import { run } from '../../bot/Bot';

const viberEventTextMessage = new ViberEvent({
  event: 'message',
  timestamp: 1457764197627,
  messageToken: 4912661846655238145,
  sender: {
    id: '01234567890A=',
    name: 'John McClane',
    avatar: 'http://avatar.example.com',
    country: 'UK',
    language: 'en',
    apiVersion: 1,
  },
  message: {
    type: 'text',
    text: 'a message to the service',
    trackingData: 'tracking data',
  },
});

const viberEventSubscribed = new ViberEvent({
  event: 'subscribed',
  timestamp: 1457764197627,
  user: {
    id: '01234567890A=',
    name: 'John McClane',
    avatar: 'http://avatar.example.com',
    country: 'UK',
    language: 'en',
    apiVersion: 1,
  },
  messageToken: 4912661846655238145,
});

const viberEventUnsubscribed = new ViberEvent({
  event: 'unsubscribed',
  timestamp: 1457764197627,
  userId: '01234567890A=',
  messageToken: 4912661846655238145,
});

const viberEventConversationStarted = new ViberEvent({
  event: 'conversation_started',
  timestamp: 1457764197627,
  messageToken: 4912661846655238145,
  type: 'open',
  context: 'context information',
  user: {
    id: '01234567890A=',
    name: 'John McClane',
    avatar: 'http://avatar.example.com',
    country: 'UK',
    language: 'en',
    apiVersion: 1,
  },
  subscribed: false,
});

const viberEventDelivered = new ViberEvent({
  event: 'delivered',
  timestamp: 1457764197627,
  messageToken: 4912661846655238145,
  userId: '01234567890A=',
});

const viberEventSeen = new ViberEvent({
  event: 'seen',
  timestamp: 1457764197627,
  messageToken: 4912661846655238145,
  userId: '01234567890A=',
});

const viberEventFailed = new ViberEvent({
  event: 'failed',
  timestamp: 1457764197627,
  messageToken: 4912661846655238145,
  userId: '01234567890A=',
  desc: 'failure description',
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

async function expectRouteMatchViberEvent({ route, event }) {
  const context = new ViberContext({
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

async function expectRouteNotMatchViberEvent({ route, event }) {
  const context = new ViberContext({
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

describe('#viber', () => {
  it('should call action when it receives a viber event', async () => {
    await expectRouteMatchViberEvent({
      route: viber(Action),
      event: viberEventTextMessage,
    });
  });

  it('should not call action when it receives a non-viber event', async () => {
    await expectRouteNotMatchContext({
      route: viber(Action),
      context: new TestContext({
        client: {} as any,
        event: {},
      }),
    });
  });

  describe('#viber.any', () => {
    it('should call action when it receives a viber event', async () => {
      await expectRouteMatchViberEvent({
        route: viber.any(Action),
        event: viberEventTextMessage,
      });
    });

    it('should not call action when it receives a non-vibe