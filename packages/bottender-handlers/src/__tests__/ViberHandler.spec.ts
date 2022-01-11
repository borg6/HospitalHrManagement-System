import ViberHandler from '../ViberHandler';

jest.mock('warning');

const setup = () => {
  const builder = new ViberHandler();
  return {
    builder,
  };
};

describe('#constructor', () => {
  it('should construct without error', () => {
    const { builder } = setup();
    expect(ViberHandler).toBeDefined();
    expect(builder).toBeInstanceOf(ViberHandler);
  });
});

describe('#onSubscribed', () => {
  const subscribed = {
    event: 'subscribed',
    timestamp: 1457764197627,
    user: {
      id: '01234567890A=',
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
      country: 'UK',
      language: 'en',
      api_version: 1,
    },
    message_token: 4912661846655238145,
  };

  it('should return this', async () => {
    const { builder } = setup();
    const handler = () => {};
    expect(await builder.onSubscribed(handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isSubscribed: true,
        subscribed,
      },
    };
    builder.onSubscribed(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received onSubscribed event', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isSubscribed: true,
        subscribed,
      },
    };
    builder.onSubscribed(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(subscribed, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call handler when received not subscribed event', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isSubscribed: false,
        subscribed: null,
      },
    };
    builder.onSubscribed(handler);
    await builder.build()(context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onUnsubscribed', () => {
  const unsubscribed = {
    event: 'unsubscribed',
    timestamp: 1457764197627,
    user_id: '01234567890A=',
    message_token: 4912661846655238145,
  };

  it('should return this', async () => {
    const { builder } = setup();
    const handler = () => {};
    expect(await builder.onUnsubscribed(handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isUnsubscribed: true,
        unsubscribed,
      },
    };
    builder.onUnsubscribed(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received onUnsubscribed event', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isUnsubscribed: true,
        unsubscribed,
      },
    };
    builder.onUnsubscribed(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(unsubscribed, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call handler when received not unsubscribed event', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isUnsubscribed: false,
        unsubscribed: null,
      },
    };
    builder.onUnsubscribed(handler);
    await builder.build()(context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onConversationStarted', () => {
  const conversationStarted = {
    event: 'conversation_started',
    timestamp: 1457764197627,
    message_token: 4912661846655238145,
    type: 'open',
    context: 'context information',
    user: {
      id: '01234567890A=',
      name: 'John McClane',
      avatar: 'http://avatar.example.com',
      country: 'UK',
      language: 'en',
      api_version: 1,
    },
    subscribed: false,
  };

  it('should return this', async () => {
    const { builder } = setup();
    const handler = () => {};
    expect(await builder.onConversationStarted(handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isConversationStarted: true,
        conversationStarted,
      },
    };
    builder.onConversationStarted(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received conversation started event', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isConversationStarted: true,
        conversationStarted,
      },
    };
    builder.onConversationStarted(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(conversationStarted, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call handler when received not conversation started event', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isConversationStarted: false,
        conversationStarted: null,
 