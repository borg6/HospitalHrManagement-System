
# 1.5.5 / 2021-11-10

- [deps] use forked `@bottender/jfs` instead of unmaintained `jfs`.

# 1.5.4 / 2021-10-11

## line

- [deprecated] add deprecated warning to the following methods:

- `context.useAccessToken`
- `context.replyButtonTemplate`
- `context.push`
- `context.pushText`
- `context.pushImage`
- `context.pushVideo`
- `context.pushAudio`
- `context.pushLocation`
- `context.pushSticker`
- `context.pushImagemap`
- `context.pushFlex`
- `context.pushTemplate`
- `context.pushButtonTemplate`
- `context.pushButtonsTemplate`
- `context.pushConfirmTemplate`
- `context.pushCarouselTemplate`
- `context.pushImageCarouselTemplate`
- `context.send`
- `context.sendImage`
- `context.sendVideo`
- `context.sendAudio`
- `context.sendLocation`
- `context.sendSticker`
- `context.sendImagemap`
- `context.sendFlex`
- `context.sendTemplate`
- `context.sendButtonTemplate`
- `context.sendButtonsTemplate`
- `context.sendConfirmTemplate`
- `context.sendCarouselTemplate`
- `context.sendImageCarouselTemplate`

# 1.5.3 / 2021-10-05

- [deps] remove `prompt-confirm`.

# 1.5.2 / 2021-09-30

- [deps] update dependencies.

# 1.5.1 / 2021-09-14

- [new] Server: support experimental custom connectors (#781):

```js
// bottender.config.js

module.exports = {
  channels: {
    mychannel: {
      enabled: true,
      path: '/webhooks/mychannel',
      connector: new MyConnector(/* ... */),
    },
  },
};
```

- [new]: export clients, factories from `messaging-apis` (#806):

```js
const {
  // clients
  MessengerClient,
  LineClient,
  TelegramClient,
  SlackOAuthClient,
  ViberClient,
  TwilioClient,

  // factories
  Messenger,
  Line,
} = require('bottender');
```

- [new] Bot: implement the `onRequest` option (#773):

```js
// bottender.config.js

function onRequest(body, requestContext) {
  console.log({
    body,
    requestContext,
  });
}

module.exports = {
  channels: {
    messenger: {
      // ...
      onRequest,
    },
    whatsapp: {
      // ...
      onRequest,
    },
    line: {
      // ...
      onRequest,
    },
    telegram: {
      // ...
      onRequest,
    },
    slack: {
      // ...
      onRequest,
    },
    viber: {
      // ...
      onRequest,
    },
  },
};
```

- [new] RequestContext: add `id` to `RequestContext` (#774)
- [fix] Server: should await for `connector.preprocess` (#771)
- [deps] upgrade `messaging-apis` to v1.0.0

## messenger

- [new] get/set/delete user level persistent menu for context user (#790):

```js
await context.getUserPersistentMenu();
// [
//   {
//     locale: 'default',
//     composerInputDisabled: false,
//     callToActions: [
//       {
//         type: 'postback',
//         title: 'Restart Conversation',
//         payload: 'RESTART',
//       },
//       {
//         type: 'web_url',
//         title: 'Powered by ALOHA.AI, Yoctol',
//         url: 'https://www.yoctol.com/',
//       },
//     ],
//   },
// ]

await context.setUserPersistentMenu([
  {
    locale: 'default',
    composerInputDisabled: false,
    callToActions: [
      {
        type: 'postback',
        title: 'Restart Conversation',
        payload: 'RESTART',
      },
      {
        type: 'web_url',
        title: 'Powered by ALOHA.AI, Yoctol',
        url: 'https://www.yoctol.com/',
      },
    ],
  },
]);

await context.deleteUserPersistentMenu();
```

## line

- [new] support line multi-channel using `getConfig` (#770):

```js
// bottender.config.js
module.exports = {
  channels: {
    line: {
      enabled: true,
      path: '/webhooks/line/:channelId',
      async getConfig({ params }) {
        console.log(params.channelId);
        // ...get the config from the API, database or wherever you like when every time receiving a new event
        return {
          accessToken,
          channelSecret,
        };
      },
    },
  },
};
```

- [new] add `emojis` on LINE text message event (#793):

```js
if (context.event.isMessage) {
  context.event.message.emojis;
  // [
  //   {
  //     index: 14,
  //     length: 6,
  //     productId: '5ac1bfd5040ab15980c9b435',
  //     emojiId: '001',
  //   },
  // ]
}
```

- [new] add `LineContext.getMembersCount` method (#824):

```js
await context.getMembersCount();
// 10
```

## telegram

- [new] add `TelegramEvent.isPollAnswer` and `TelegramEvent.pollAnswer` (#745):

```js
if (context.event.isPollAnswer) {
  console.log(context.event.pollAnswer);
}
```

- [new] add `pollAnswer` to telegram routes:

```js
const { router, telegram } = require('bottender/router');

async function HandlePollAnswer(context) {
  // ...
}

function App() {
  return router([telegram.pollAnswer(HandlePollAnswer)]);
}
```

- [new] add `TelegramContext.answerCallbackQuery` (#750):

```js
await context.answerCallbackQuery({
  url: 'https://example.com/',
});
```

## slack

- [new] slack route accept any requests by passing `*` (#758):

```js
const { router, slack } = require('bottender/router');

async function HandleAllEvent(context) {
  // ...
}

function App() {
  return router([slack.event('*', HandleAllEvent)]);
}
```

- [fix] fix `context.views.open` in slack home tab (#809)
- [fix] fix route slack event (#841)
- [fix] fix slack session when channel id is null (#802)
- [docs] update slack routes improvement (#759)
- [example] example: slack update and delete (#769)
- [example] slack home tab (#829)
- [example] slack modal on home (#827)
- [example] slack modal update (#825)
- [example] slack modal form (#828)

## dialogflow

- [deps] use `@google-cloud/dialogflow` v4

## create-bottender-app

- [fix] fix context concat and env name (#859)

## bottender-facebook

- [new] add new connector - `FacebookConnector` to experiment using same connector for Messenger and Facebook.

```js
// bottender.config.js
const { FacebookConnector } = require('@bottender/facebook');

module.exports = {
  channels: {
    facebook: {
      enabled: true,
      path: '/webhooks/facebook',
      connector: new FacebookConnector({
        // The top level access token should be provided for the batch requests.
        accessToken: process.env.FACEBOOK_ACCESS_TOKEN,
        appSecret: process.env.FACEBOOK_APP_SECRET,
        verifyToken: process.env.FACEBOOK_VERIFY_TOKEN,
        origin: process.env.FACEBOOK_ORIGIN,
        async mapPageToAccessToken(pageId) {
          console.log(pageId);
          return accessToken;
        },
      }),
      onRequest: onFacebookRequest,
    },
  },
};
```

# 1.4.12 / 2020-08-25

## create-bottender-app

- [fix] fix context concat and env name #859

# 1.4.11 / 2020-07-29

## dialogflow

- [fix] use for await instead of `promise.all` #851

# 1.4.10 / 2020-07-24

- [fix] add Interaction type for route `slack.event` (#842)

# 1.4.9 / 2020-07-07

- [fix] MongoSessionStore: enable `useUnifiedTopology` to avoid warning (#831)

# 1.4.8 / 2020-06-30

- [fix] lock messaging-apis packages on specific version.

# 1.4.7 / 2020-06-23

- [fix] add a workaround to support express behind trust proxies (for example: nginx) with:

```js
server.enable('trust proxy');

// or
server.set('trust proxy', true);
```

# 1.4.6 / 2020-05-22

## messenger

- [fix] cli: remove deprecated properties on messenger profiles (including `home_url`).

# 1.4.5 / 2020-05-11

- [fix] fix issue #618 ngrok undefined error message (#765)

# 1.4.4 / 2020-05-06

## slack

- [fix] convert slack interactive message event to camelcase (#755).

# 1.4.3 / 2020-04-29

- [type] use string instead enum to compare.

# 1.4.2 / 2020-04-24

- [type] improve TS types of the `getClient` function (#744)

# 1.4.1 / 2020-04-17

## line

- [fix] bump messaging-api-line to beta.20 and fix types in text methods (#742)

# 1.4.0 / 2020-04-15

- [new] route: provides `namespace.any` for better readability (#719):

```js
function App() {
  return router([
    messenger.any(HandleMessenger),
    line.any(HandleLine),
    slack.any(HandleSlack),
    telegram.any(HandleTelegram),
    viber.any(HandleViber),
    whatsapp.any(HandleWhatsapp),
  ]);
}
```

- [new] support custom session store (#732):

```js
// bottender.config.js

const { MemorySessionStore } = require('bottender');

module.exports = {
  session: {
    driver: 'memory2',
    stores: {
      memory2: new MemorySessionStore();
    },
  },
};
```

- [fix] context: let getters return literal instead of string type (#724)
- [type] improve types of withProps (#731)

## messenger

- [new] messenger: use v6.0 graph api as default (messaging-apis#556)
- [new] support reaction event and routing (#718):

Support `event.isReaction` & `event.react`:

```js
function App(context) {
  if (context.event.isReaction) {
    console.log(context.event.reaction);
    // {
    //   reaction: 'smile',
    //   emoji: '\u{2764}\u{FE0F}',
    //   action: 'react',
    //   mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    //  }
  }
}
```

Support detect events in routers:

```js
const { router, messenger } = require('bottender/router');

function App() {
  return router([
    messenger.reaction.react(HandleReactionReact),
    messenger.reaction.unreact(HandleReactionUnreact),
    messenger.reaction(HandleReaction),
  ]);
}

async function HandleReactionReact(context) {}
async function HandleReactionUnreact(context) {}
async function HandleReaction(context) {}
```

- [new] add `context.sendOneTimeNotifReqTemplate` (#722):

```js
context.sendOneTimeNotifReqTemplate({
  title: '<TITLE_TEXT>',
  payload: '<USER_DEFINED_PAYLOAD>',
});
```

- [type] improve types of MessengerContext send methods (#729)

## line

- [new] export `LineNotify` (#721):

```js
const { LineNotify } = require('bottender');
```

- [type] add `language` to `User` (messaging-apis#563)
- [type] add `sticon` to `TextMessage` (messaging-apis#564)
- [type] export LINE flex types (messaging-apis#558)

## bottender-dialogflow

- [new] support text responses filled on Dialogflow.

## create-bottender-app

- [new] add `lib` es2018-es2020 by default.
- [fix] let `App` action accept Action as return value (#734)

# 1.3.5 / 2020-04-04

- [fix] put `router.d.ts` into package files whitelist

# 1.3.4 / 2020-04-04

- [fix] fix `bottender/router` import statement in TypeScript (#715)

# 1.3.3 / 2020-04-01

## line

- [deps] update `messaging-api-line` for [domain name change for certain endpoints](https://developers.line.biz/en/news/2019/11/08/domain-name-change/).

# 1.3.2 / 2020-03-20

- [fix] improve the error message of missing entry action (#705).
- [fix] fix responding with application/json when using custom server (#700).

## line

- [deps] update `messaging-api-line`.

## create-bottender-app

- [fix] rewrite generated README (#708).
- [fix] install `eslint-plugin-import` for `--typescript`.
- [fix] add `dist` to `.gitignore` for TypeScript (#697).

# 1.3.1 / 2020-03-16

- [deps] some packages bump from dependabot.

## line

- [deps] update `messaging-api-line` to fix an issue about narrowcast.

## create-bottender-app

- [fix] hint users to edit the `.env` file (#678)

# 1.3.0 / 2020-03-06

- [type] export types from messaging-apis (#661):

```ts
import {
  MessengerTypes,
  WhatsappTypes,
  LineTypes,
  TelegramTypes,
  SlackTypes,
  ViberTypes,
} from 'bottender';
```

- [deps] update dependencies.

## whatsapp

- [new] add new channel `whatsapp` built on top of [Twilio API for WhatsApp](https://www.twilio.com/whatsapp) (#664):

```js
// bottender.config.js

module.exports = {
  channels: {
    whatsapp: {
      enabled: true,
      path: '/webhooks/whatsapp',
      accountSid: process.env.WHATSAPP_ACCOUNT_SID,
      authToken: process.env.WHATSAPP_AUTH_TOKEN,
      phoneNumber: process.env.WHATSAPP_PHONE_NUMBER,
    },
  },
};
```

## slack

- [new] support Slack signing secret:

```js
// bottender.config.js

module.exports = {
  channels: {
    slack: {
      enabled: true,
      path: '/webhooks/slack',
      accessToken: process.env.SLACK_ACCESS_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
      // verificationToken: process.env.SLACK_VERIFICATION_TOKEN, // deprecated, use signingSecret
    },
  },
};
```

- [new] add support for Slack slash commands (#166):

```js
async function App(context) {
  if (context.event.isCommand) {
    await context.sendText(
      `I received slash command '${context.event.command}' with arguments: '${context.event.text}'`
    );
  }
}
```

## line

- [deps] update `messaging-api-line` to support narrowcast.

## create-bottender-app

- [new] use signing secret in create-bottender-app (#659).
- [new] add TypeScript support to `bottender dev` (#654).

## cli

- [new] support `bottender dev --inspect=HOST:PORT` (#656).

# 1.2.3 / 2020-03-04

## slack

- [fix] fix a typo in Slack error message #671

# 1.2.2 / 2020-02-24

## create-bottender-app

- [fix] Fixed wrong npm scripts in the instruction.

# 1.2.1 / 2020-02-13

- [fix] install @types packages in package dependencies instead of workspace.

# 1.2.0 / 2020-01-22

- [new] Added four NLU packages:

  - [@bottender/dialogflow](https://github.com/Yoctol/bottender/tree/master/packages/bottender-dialogflow)
  - [@bottender/luis](https://github.com/Yoctol/bottender/tree/master/packages/bottender-luis)
  - [@bottender/qna-maker](https://github.com/Yoctol/bottender/tree/master/packages/bottender-qna-maker)
  - [@bottender/rasa](https://github.com/Yoctol/bottender/tree/master/packages/bottender-rasa)

- [new] Added `context.setIntent()` for intent tracking purpose (#617):

```js
context.intent; // null

context.setIntent('greeting');

context.intent; // 'greeting'
```

- [new] Added `context.setAsHandled()` and `context.setAsNotHandled()` for tracking handling status (#624):

```js
context.setAsHandled();

context.isHandled; // true

context.setAsNotHandled();

context.isHandled; // false
```

- [new] Added `getSessionStore` helper function to get the session store that configured by `bottender.config.js` (#633):

```js
const { getSessionStore } = require('bottender');

const sessionStore = getSessionStore();
```

- [new] Added `getClient` helper function to access underlying messaging client configured by `bottender.config.js` (#634):

```js
const { getClient } = require('bottender');

const messenger = getClient('messenger');

messenger.sendText(USER_ID, 'Hello!', { tag: 'CONFIRMED_EVENT_UPDATE' });

const line = getClient('line');

line.pushText(USER_ID, 'Hello!');
```

- [new] Added async plugin support.
- [docs] Updated [Natural Language Understanding Guide](https://bottender.js.org/docs/advanced-guides-nlu) to use NLU packages.
- [example] Using NLU packages in NLU examples.

### slack

- [new] add `includeBotMessages` option for interacting with `bot_message` (#635):

```js
// bottender.config.js

module.exports = {
  // ...
  slack: {
    enabled: true,
    path: '/webhooks/slack',
    accessToken: process.env.SLACK_ACCESS_TOKEN,
    verificationToken: process.env.SLACK_VERIFICATION_TOKEN,
    includeBotMessages: true, // add this line
  },
};
```

Then you can use `context.event.isBotMessage` to determine if the event is a bot message event:

```js
module.exports = function App(context) {
  if (context.event.isBotMessage) {
    console.log(context.event.rawEvent.botId);
  }
};
```

# 1.1.3 / 2020-01-08

- [fix] fix(Bot, LineConnector, MessengerConnector): when receiving multiple events, construct session with event instead of request #621

# 1.1.2 / 2020-01-03

- [fix] fix(DevServer): call `super.prepare()` in `prepare` method to avoid overwriting parent method

# 1.1.1 / 2020-01-02

- [fix] improve error message when there are errors in bottender.config.js (#611)

# 1.1.0 / 2019-12-27

- [new] improve error messages for bots configuration:

```
LINE channel secret is required. Please make sure you have filled it correctly in `bottender.config.js` or `.env` file.
```

Instead of:

```
TypeError [ERR_INVALID_ARG_TYPE]: The "key" argument must be one of type Buffer, TypedArray, DataView, string, or KeyObject. Received type undefined
```

### messenger

- [new] Added Messenger routes:

```js
const { router, messenger } = require('bottender/router');

function Action() {
  // ...
}

function App() {
  return router([
    messenger.message(Action),
    messenger.accountLinking.linked(Action),
    messenger.accountLinking.unlinked(Action),
    messenger.accountLinking(Action),
    messenger.checkoutUpdate(Action),
    messenger.delivery(Action),
    messenger.echo(Action),
    messenger.gamePlay(Action),
    messenger.passThreadControl(Action),
    messenger.takeThreadControl(Action),
    messenger.requestThreadControl(Action),
    messenger.appRoles(Action),
    messenger.optin(Action),
    messenger.payment(Action),
    messenger.policyEnforcement(Action),
    messenger.postback(Action),
    messenger.preCheckout(Action),
    messenger.read(Action),
    messenger.referral(Action),
    messenger.standby(Action),
    messenger(Action),
  ]);
}
```

### line

- [new] Added LINE routes:

```js
const { router, line } = require('bottender/router');

function Action() {
  // ...
}

function App() {
  return router([
    line.message(Action),
    line.follow(Action),
    line.unfollow(Action),
    line.join(Action),
    line.leave(Action),
    line.memberJoined(Action),
    line.memberLeft(Action),
    line.postback(Action),
    line.beacon.enter(Action),
    line.beacon.banner(Action),
    line.beacon.stay(Action),
    line.beacon(Action),
    line.accountLink(Action),
    line.things.link(Action),
    line.things.unlink(Action),
    line.things.scenarioResult(Action),
    line.things(Action),
    line(Action),
  ]);
}
```

### slack

- [new] Implemented native Slack chat APIs, see Slack API Doc for further information.
  e.g.

```js
context.chat.postMessage(...);
context.chat.postEphemeral(...);
context.chat.update(...);
context.chat.delete(...);
context.chat.meMessage(...);
context.chat.getPermalink(...);
context.chat.scheduleMessage(...);
context.chat.deleteScheduledMessage(...);
context.chat.scheduledMessages.list(...);
```

`context.postMessage`and`context.postEphemeral`is now deprecated, use`context.chat.postMessage`and`context.chat.postEphemeral` instead.

- [new] Implemented native Slack views APIs, see [Slack API Doc](https://api.slack.com/methods) for further information.
  e.g.

```js
context.views.open(...);
context.views.publish(...);
context.views.push(...);
context.views.update(...);
```

For views, we keep `channelId` in `privateMetadata` to get session key for upcoming view events. ([ref](https://github.com/Yoctol/bottender/pull/545))

- [new] Added Slack routes:

```js
const { router, slack } = require('bottender/router');

function Action() {
  // ...
}

function App() {
  return router([
    slack.message(Action),
    slack.event('pin_added', Action),
    slack.event('star_added', Action),
    slack(Action),
  ]);
}
```

### telegram

- [new] Added Telegram routes:

```js
const { router, telegram } = require('bottender/router');

function Action() {
  // ...
}

function App() {
  return router([
    telegram.message(Action),
    telegram.editedMessage(Action),
    telegram.channelPost(Action),
    telegram.editedChannelPost(Action),
    telegram.inlineQuery(Action),
    telegram.chosenInlineResult(Action),
    telegram.callbackQuery(Action),
    telegram.shippingQuery(Action),
    telegram.preCheckoutQuery(Action),
    telegram.poll(Action),
    telegram(Action),
  ]);
}
```

### viber

- [new] Added Viber routes:

```js
const { router, viber } = require('bottender/router');

function Action() {
  // ...
}

function App() {
  return router([
    viber.message(Action),
    viber.subscribed(Action),
    viber.unsubscribed(Action),
    viber.conversationStarted(Action),
    viber.delivered(Action),
    viber.seen(Action),
    viber.failed(Action),
    viber(Action),
  ]);
}
```

# 1.0.8 / 2020-01-08

- [fix] fix(Bot, LineConnector, MessengerConnector): when receiving multiple events, construct session with event instead of request #621

# 1.0.7 / 2020-01-03

- [fix] fix(DevServer): call `super.prepare()` in `prepare` method to avoid overwriting parent method

# 1.0.6 / 2019-12-24

- [fix] session should never expire by default #595

# 1.0.5 / 2019-12-19

- [fix] move init session and bots into server prepare step #589

# 1.0.4 / 2019-12-17

- [fix] session: use Windows safe key separator for file session

# 1.0.3 / 2019-12-12

- [fix] server: require Bot using pascal case

# 1.0.2 / 2019-12-12

- [fix] server: add `prepare` support for production mode.

# 1.0.1 / 2019-12-10

### messenger

- feat(messenger): add `fields` support to `context.getUserProfile()`:

```js
const user = await context.getUserProfile({
  fields: [
    'id',
    'name',
    'first_name',
    'last_name',
    'profile_pic',
    'locale',
    'timezone',
    'gender',
  ],
});
```

- fix(example): fix `bottender.config.js` in `messenger-typing` example

### line

- fix(line): set `shouldBatch` to `false` after `handlerDidEnd` has been called. This may be the best way to handle errors in LINE:

```js
module.exports = async function HandleError(context, props) {
  console.error(props.error);
  if (process.env.NODE_ENV === 'development') {
    await context.pushText('There are some unexpected errors happened. Please try again later, sorry for the inconvenience.');
    await context.pushText(props.error.stack);
  } else if (!context.isReplied) {
    await context.replyText('There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'
  }
  if (process.env.NODE_ENV === 'production') {
    // send your error to the error tracker, for example: Sentry
  }
};
```

### telegram

- feat(telegram): add telegram `context.editMessageMedia()`:

```js
await context.editMessageMedia(66, { type: 'photo', media: 'xxx.png' });
```

# 1.0.0 / 2019-12-05

- The whole codebase has been fully rewritten with **TypeScript**.
- The repository becomes a lerna **monorepo**.
- [new] A brand-new project creator - `create-bottender-app`. You can use following command to create your new bot:

```sh
npx create-bottender-app my-app
```

- [new] Implement new runner and `bottender start` cli. It finds `index.js` entry and `bottender.config.js` config file then executes accordingly:

```sh
bottender start
```

To enable console mode:

```sh
bottender start --console
```

- [new] Add new development mode via `bottender dev` cli:

```sh
bottender dev
bottender dev --console
```

The bot server will be restarted after changing the files.

- [new] Add several recommended ways to organize chatbot dialogs and features:

**Action**:

```js
async function SayHi(context) {
  await context.sendText('hi');
}
```

**Pass Props to Action**:

```js
const { withProps } = require('bottender');

async function SayHi(context, { name }) {
  await context.sendText(`hi! ${name}.`);
}

async function App() {
  return withProps(SayHi, { name: 'John' });
}
```

**Router**:

```js
const { router, text } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function SayHello(context) {
  await context.sendText('Hello!');
}

async function App() {
  return router([
    text('hi', SayHi), // return SayHi when receiving hi text message
    text('hello', SayHello), // return SayHello when receiving hello text message
  ]);
}
```

**Chain**:

```js
const { chain } = require('bottender');

function RuleBased(context, props) {
  if (context.event.text === 'hi') {
    // discontinue and return SayHi
    return SayHi;
  }
  // continue to next
  return props.next;
}

function MachineLearningBased(context, props) {
  /* ...skip */
}

function HumanAgent(context, props) {
  /* ...skip */
}

function App() {
  return chain([
    // will execute in following order
    RuleBased,
    MachineLearningBased,
    HumanAgent,
  ]);
}
```

- [new] Add `_error.js` entry support for error handling:

```js
// _error.js
module.exports = async function HandleError(context, props) {
  await context.sendText(
    'There are some unexpected errors happened. Please try again later, sorry for the inconvenience.'
  );
  console.error(props.error);
  if (process.env.NODE_ENV === 'production') {
    // send your error to the error tracker, for example: Sentry
  }
  if (process.env.NODE_ENV === 'development') {
    await context.sendText(props.error.stack);
  }
};
```

- [new] Add better custom server support
- [breaking] `middleware` and Handlers has been moved to `@bottender/handlers` package. You can install it from registry:

```sh
npm install @bottender/handlers

// or using yarn:
yarn add @bottender/handlers
```

And import them like this:

```js
const {
  middleware,
  Handler,
  MessengerHandler,
  LineHandler,
  SlackHandler,
  TelegramHandler,
  ViberHandler,
} = require('@bottender/handlers');
```

- [breaking] transform all context method parameters to camelcase:

Messenger -

```js
context.sendGenericTemplate([
  {
    title: "Welcome to Peter's Hats",
    imageUrl: 'https://petersfancybrownhats.com/company_image.png',
    subtitle: "We've got the right hat for everyone.",
    defaultAction: {
      type: 'web_url',
      url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',
      messengerExtensions: true,
      webviewHeightRatio: 'tall',
      fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/',
    },
    buttons: [
      {
        type: 'postback',
        title: 'Start Chatting',
        payload: 'DEVELOPER_DEFINED_PAYLOAD',
      },
    ],
  },
]);
```

Slack -

```js
context.postMessage({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'You updated the modal!',
      },
    },
    {
      type: 'image',
      imageUrl: 'https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif',
      altText: 'Yay! The modal was updated',
    },
  ],
});
```

Telegram -

```js
context.sendMessage('hi', {
  disableWebPagePreview: true,
  disableNotification: true,
});
```

Viber -

```js
context.sendFile({
  media: 'http://www.images.com/file.doc',
  size: 10000,
  fileName: 'name_of_file.doc',
});
```

- [breaking] transform all event attributes to camelcase:

```js
context.event.rawEvent; // all keys is camelcase in this object
```

- [breaking] rename `skipProfile` to `skipLegacyProfile`, and set to true by default

- [breaking] unify requestContext (#541)
- [deps] update `messaging-apis` to v1
- [examples] Rewrite all examples for Bottender v1
- [docs] A brand-new website with new docs - https://bottender.js.org?new

### messenger

- [new] add `pageId` config to automatically add subscribe app in `bottender messenger webhook set`.
- [removed] `get-started`, `greeting`, `persistent-menu`, `whitelisted-domains` cli subcommands has been removed. Use `profile` instead:

```sh
bottender messenger profile get
bottender messenger profile set
bottender messenger profile delete
```

- [removed] Remove deprecated `context.sendAirlineFlightUpdateTemplate()`.

### line

- [new] Implement `context.getMessageContent()`. You can use it to get received media content:

```js
async function App(context) {
  if (context.event.isImage || context.event.isVideo || context.event.isAudio) {
    const buffer = await context.getMessageContent();
  }
}
```

- [new] LineBot: Set `sendMethod` to `reply` and `shouldBatch` to `true` by default.
- [removed] legacy `menu` cli subcommand has been removed.

### slack

- [new] add block kits support:

```js
context.postMessage({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'You updated the modal!',
      },
    },
    {
      type: 'image',
      imageUrl: 'https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif',
      altText: 'Yay! The modal was updated',
    },
  ],
});
```

- [fix] use `token` in payload when received a JSON string payload.

### telegram

- [new] implement `context.sendAnimation()`:

```js
context.sendAnimation('xxx.mp4');
```

- [new] implement `context.sendPoll()`

```js
const options = ['a', 'b'];

context.sendPoll(question, options);
```

- [breaking] add messageId to args for all function need messageId:

```js
context.editMessageText('<MESSAGE_ID>', text);
context.editMessageCaption('<MESSAGE_ID>', caption);
context.editMessageReplyMarkup('<MESSAGE_ID>', replyMarkup);
context.editMessageLiveLocation('<MESSAGE_ID>', location);
context.stopMessageLiveLocation('<MESSAGE_ID>');
```

# 0.15.17 / 2019-02-01

### line

- [new] add member join/leave event to LineEvent

```js
event.isMemberJoined;
event.memberJoined;
event.isMemberLeft;
event.memberLeft;
```

# 0.15.16 / 2019-01-29

- [deps] upgrade messaging-api-messenger to [0.7.16](https://github.com/bottenderjs/messaging-apis/releases/tag/v0.7.16)

# 0.15.15 / 2018-12-06

### messenger

- [new] Add `page.id` to Messenger sessions:

```js
session.page.id;
```

### line

- [new] Add `skipProfile` to `LinekBot` and `LinekConnector`.
- [new] Add `destination` to `LineEvent`.

### slack

- [new] Add `skipProfile` to `SlackBot` and `SlackConnector`.

### telegram

- [fix] Add missing cli alias `-w` for `--webhook`.

# 0.15.14 / 2018-11-14

### messenger

- [new] provide useful information when setting webhook

# 0.15.13 / 2018-11-12

- [new] Add `context.usePersona`:

```js
context.usePersona('<PERSONA_ID>');
await context.sendText('Hello');
await context.sendText('World');
```

# 0.15.12 / 2018-11-09

### messenger

- [new] Add `skipProfile` option to `MessengerBot` and `MessengerConnector` to skip auto updating user profile:

```js
const bot = new MessengerBot({
  accessToken: ACCESS_TOKEN,
  appSecret: APP_SECRET,
  skipProfile: true,
});
```

# 0.15.11 / 2018-11-07

### messenger

- [new] Add `skipAppSecretProof` option to `MessengerBot` and `MessengerConnector`:

```js
const bot = new MessengerBot({
  accessToken: ACCESS_TOKEN,
  appSecret: APP_SECRET,
  skipAppSecretProof: true,
});
```

# 0.15.10 / 2018-11-02

- [new] platform bots: add `origin` option for testing purpose:

```js
new MessengerBot({
  // ...
  origin: 'https://mydummytestserver.com',
});
new LineBot({
  // ...
  origin: 'https://mydummytestserver.com',
});
new SlackBot({
  // ...
  origin: 'https://mydummytestserver.com',
});
new ViberBot({
  // ...
  origin: 'https://mydummytestserver.com',
});
new TelegramBot({
  // ...
  origin: 'https://mydummytestserver.com',
});
```

### messenger

- [fix] update Messenger profile_pic check logic
- [fix] fix persona cli error messages

# 0.15.9 / 2018-10-26

### messenger

- [new] Add CLI commands for Messenger persona API:

List all personas:

```sh