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
    const handl