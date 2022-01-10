import warning from 'warning';

import Handler, {
  Builder,
  FunctionalHandler,
  Pattern,
  Predicate,
  matchPattern,
} from './Handler';

export default class MessengerHandler extends Handler {
  onPostback(
    ...args:
      | [Predicate, FunctionalHandler | Builder]
      | [FunctionalHandler | Builder]
  ) {
    if (args.length < 2) {
      const [handler] = args as [FunctionalHandler | Builder];
      this.on((context) => context.event.isPostback, handler);
    } else {
      const [predicate, handler] = args as [
        Predicate,
        FunctionalHandler | Builder
      ];

      warning(
        typeof predicate === 'function',
        `'onPostback' only accepts function, but received ${typeof predicate}`
      );

      this.on(
        (context) =>
          context.event.isPostback &&
          predicate(context.event.postback, context),
        handler
      );
    }

    return this;
  }

  onPayload(
    ...args:
      | [Pattern, FunctionalHandler | Builder]
      | [FunctionalHandler | Builder]
  ) {
    if (args.length < 2) {
      const [handler] = args as [FunctionalHandler | Builder];

      this.on(
        ({ event }) =>
          event.isPostback || (event.isMessage && !!event.message.quick_reply),
        handler
      );
    } else {
      // eslint-disable-next-line prefer-const
      let [pattern, handler] = args as [Pattern, FunctionalHandler | Builder];

      if ('build' in handler) {
        handler = handler.build();
      }

      warning(
        typeof pattern === 'function' ||
          typeof pattern === 'string' ||
          pattern instanceof RegExp,
        `'onPayload' only accepts string, regex or function, but received ${typeof pattern}`
      );

      if (typeof pattern === 'function') {
        const predicate: Predicate = pattern;
        this.on(
          (context) =>
            context.event.isPayload &&
            predicate(context.event.payload, context),
          handler
        );
      } else {
        if (pattern instanceof RegExp) {
          const patternRegExp: RegExp = pattern;

          const _handler = handler;
          handler = (context) => {
            let message;
            if (context.event.isPostback) {
              message = context.event.postback.payload;
            } else {
              message = context.event.message.quick_reply.payload;
            }
            const match = patternRegExp.exec(message);

            if (!match) return _handler(context);

            // reset index so we start at the beginning of the regex each time
            patternRegExp.lastIndex = 0;

            return _handler(context, match);
          };
        }

        this.on(
          ({ event }) =>
            event.isPayload && matchPattern(pattern, event.payload),
          handler
        );
      }
    }
    return this;
  }

  onPayment(
    ...args:
      | [Predicate, FunctionalHandler | Build