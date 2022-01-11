
import MessengerHandler from '../MessengerHandler';

const setup = () => {
  const builder = new MessengerHandler();
  return {
    builder,
  };
};

describe('#constructor', () => {
  it('should construct without error', () => {
    const { builder } = setup();
    expect(MessengerHandler).toBeDefined();
    expect(builder).toBeInstanceOf(MessengerHandler);
  });
});

describe('#onPostback', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onPostback(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPostback: true,
        postback: {
          payload: 'payload',
        },
      },
    };
    builder.onPostback(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const postback = {
      payload: 'payload',
    };
    const context = {
      event: {
        isPostback: true,
        postback: {
          payload: 'payload',
        },
      },
    };
    builder.onPostback(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(postback, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call predicate when received not postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isPostback: false,
        payload: null,
      },
    };
    builder.onPostback(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const postback = {
      payload: 'payload',
    };
    const context = {
      event: {
        isPostback: true,
        postback,
      },
    };
    builder.onPostback(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(postback, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onPayload', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const handler = () => {};
    expect(await builder.onPayload('payload', handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPostback: true,
        postback: {
          payload: 'cool',
        },
      },
    };
    builder.onPayload(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPostback: true,
        isPayload: true,
        postback: {
          payload: 'cool',
        },
        payload: 'cool',
      },
    };
    builder.onPayload('cool', handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call handler when received quick reply message', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isMessage: true,
        isQuickReply: true,
        isPayload: true,
        message: {
          quick_reply: {
            payload: 'so quick!',
          },
          text: 'wow',
        },
        quick_reply: {
          payload: 'so quick!',
        },
        text: 'wow',
        payload: 'so quick!',
      },
    };
    builder.onPayload('so quick!', handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call handler when received no payload message', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPostback: false,
        postback: null,
      },
    };
    builder.onPayload('cool', handler);
    await builder.build()(context);
    expect(handler).not.toBeCalled();
  });

  it('should not call handler when received no payload message', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isMessage: true,
        isQuickReply: false,
        message: {
          text: 'wow',
        },
        text: 'wow',
      },
    };
    builder.onPayload(handler); // no pattern
    await builder.build()(context);
    expect(handler).not.toBeCalled();
  });

  describe('should support regex', () => {
    it('when received postback', async () => {
      const { builder } = setup();
      const handler = jest.fn();
      const context = {
        event: {
          isPostback: true,
          isPayload: true,
          postback: {
            payload: 'cool',
          },
          payload: 'cool',
        },
      };

      const match = ['cool'];
      match.index = 0;
      match.input = 'cool';

      builder.onPayload(/COOL/i, handler);
      await builder.build()(context);
      expect(handler).toBeCalledWith(context, match);
    });

    it('when received quick reply message', async () => {
      const { builder } = setup();
      const handler = jest.fn();
      const quickReply = {
        payload: 'so quick!',
      };
      const context = {
        event: {
          isMessage: true,
          isPayload: true,
          isQuickReply: true,
          message: {
            quick_reply: quickReply,
            text: 'wow',
          },
          quickReply,
          text: 'wow',
          payload: 'so quick!',
        },
      };

      const match = ['so quick!'];
      match.index = 0;
      match.input = 'so quick!';

      builder.onPayload(/so quick!/i, handler);
      await builder.build()(context);
      expect(handler).toBeCalledWith(context, match);
    });
  });

  describe('should support function predicate', () => {
    it('when received postback', async () => {
      const { builder } = setup();
      const handler = jest.fn();
      const context = {
        event: {
          isPostback: true,
          isPayload: true,
          postback: {
            payload: 'cool',
          },
          payload: 'cool',
        },
      };

      builder.onPayload((payload) => payload === 'cool', handler);
      await builder.build()(context);
      expect(handler).toBeCalledWith(context);
    });

    it('when received quick reply message', async () => {
      const { builder } = setup();
      const handler = jest.fn();
      const quickReply = {
        payload: 'so quick!',
      };
      const context = {
        event: {
          isMessage: true,
          isQuickReply: true,
          isPayload: true,
          message: {
            quick_reply: quickReply,
            text: 'wow',
          },
          quickReply,
          text: 'wow',
          payload: 'so quick!',
        },
      };

      builder.onPayload((payload) => payload === 'so quick!', handler);
      await builder.build()(context);
      expect(handler).toBeCalledWith(context);
    });
  });

  it('should call handler build', async () => {
    const { builder } = setup();
    const build = jest.fn();
    const handler = { build: jest.fn(() => build) };
    const context = {
      event: {
        isPostback: true,
        isPayload: true,
        postback: {
          payload: 'cool',
        },
        payload: 'cool',
      },
    };

    builder.onPayload(/COOL/i, handler);
    await builder.build()(context);
    expect(handler.build()).toBeCalled();
  });
});

describe('#onPayment', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onPayment(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPayment: true,
        payment: {},
      },
    };
    builder.onPayment(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const payment = {};
    const context = {
      event: {
        isPayment: true,
        payment,
      },
    };
    builder.onPayment(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(payment, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call predicate when received not postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isPayment: false,
        payment: null,
      },
    };
    builder.onPayment(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const payment = {};
    const context = {
      event: {
        isPayment: true,
        payment,
      },
    };
    builder.onPayment(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(payment, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onOptin', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onOptin(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isOptin: true,
        optin: {},
      },
    };
    builder.onOptin(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const optin = {};
    const context = {
      event: {
        isOptin: true,
        optin,
      },
    };
    builder.onOptin(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(optin, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call predicate when received not postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isOptin: false,
        optin: null,
      },
    };
    builder.onOptin(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const optin = {};
    const context = {
      event: {
        isOptin: true,
        optin,
      },
    };
    builder.onOptin(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(optin, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onCheckoutUpdate', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onCheckoutUpdate(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isCheckoutUpdate: true,
        checkoutUpdate: {},
      },
    };
    builder.onCheckoutUpdate(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const checkoutUpdate = {};
    const context = {
      event: {
        isCheckoutUpdate: true,
        checkoutUpdate,
      },
    };
    builder.onCheckoutUpdate(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(checkoutUpdate, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call predicate when received not postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isCheckoutUpdate: false,
        checkoutUpdate: null,
      },
    };
    builder.onCheckoutUpdate(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const checkoutUpdate = {};
    const context = {
      event: {
        isCheckoutUpdate: true,
        checkoutUpdate,
      },
    };
    builder.onCheckoutUpdate(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(checkoutUpdate, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onPreCheckout', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onPreCheckout(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isPreCheckout: true,
        preCheckout: {},
      },
    };
    builder.onPreCheckout(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call predicate when received postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const preCheckout = {};
    const context = {
      event: {
        isPreCheckout: true,
        preCheckout,
      },
    };
    builder.onPreCheckout(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(preCheckout, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call predicate when received not postback', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isPreCheckout: false,
        preCheckout: null,
      },
    };
    builder.onPreCheckout(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const preCheckout = {};
    const context = {
      event: {
        isPreCheckout: true,
        preCheckout,
      },
    };
    builder.onPreCheckout(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(preCheckout, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onQuickReply', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onQuickReply(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isMessage: true,
        isText: true,
        isQuickReply: true,
        isPayload: true,
        message: {
          quick_reply: {
            payload: 'so quick!',
          },
          text: 'wow',
        },
        text: 'wow',
        payload: 'so quick!',
      },
    };
    builder.onQuickReply(handler);
    await builder.build()(context);
    expect(handler).toBeCalledWith(context);
  });

  it('should call handler when received quick reply message', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const quickReply = {
      payload: 'so quick!',
    };
    const context = {
      event: {
        isMessage: true,
        isText: true,
        isQuickReply: true,
        isPayload: true,
        message: {
          quick_reply: quickReply,
          text: 'wow',
        },
        quickReply,
        text: 'wow',
        payload: 'so quick!',
      },
    };
    builder.onQuickReply(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(quickReply, context);
    expect(handler).toBeCalledWith(context);
  });

  it('should not call handler when received not quick reply message', async () => {
    const { builder } = setup();
    const predicate = jest.fn(() => true);
    const handler = jest.fn();
    const context = {
      event: {
        isMessage: true,
        isQuickReply: false,
        isPayload: false,
        message: {
          text: 'wow',
        },
        text: 'wow',
      },
    };
    builder.onQuickReply(predicate, handler);
    await builder.build()(context);
    expect(predicate).not.toBeCalled();
    expect(handler).not.toBeCalled();
  });

  it('should accept async predicate', async () => {
    const { builder } = setup();
    const predicate = jest.fn().mockResolvedValue(false);
    const handler = jest.fn();
    const quickReply = {
      payload: 'so quick!',
    };
    const context = {
      event: {
        isMessage: true,
        isQuickReply: true,
        isPayload: true,
        message: {
          quick_reply: quickReply,
          text: 'wow',
        },
        quickReply,
        text: 'wow',
        payload: 'so quick!',
      },
    };
    builder.onQuickReply(predicate, handler);
    await builder.build()(context);
    expect(predicate).toBeCalledWith(quickReply, context);
    expect(handler).not.toBeCalled();
  });
});

describe('#onEcho', () => {
  it('should return this', async () => {
    const { builder } = setup();
    const predicate = () => true;
    const handler = () => {};
    expect(await builder.onEcho(predicate, handler)).toBe(builder);
  });

  it('should support catch all handler', async () => {
    const { builder } = setup();
    const handler = jest.fn();
    const context = {
      event: {
        isMessage: true,
        isText: true,
        isEcho: true,
        message: {
          is_echo: true,
          text: 'wow',