---
id: api-telegram-client
title: TelegramClient
---

- [Usage](#usage)
- [Methods](#methods)
  - [Webhook API](#webhook-api)
  - [Send API](#send-api)
  - [Get API](#get-api)
  - [Updating API](#updating-api)
  - [Group API](#group-api)
  - [Payments API](#payments-api)
  - [Inline Mode API](#inline-mode-api)
  - [Game API](#game-api)
  - [Others](#others)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `TelegramClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('telegram');

// `client` is a `TelegramClient` instance
const webhookInfo = await client.getWebhookInfo();
```

Or, get the `TelegramClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'telegram') {
    // `context.client` is a `TelegramClient` instance
    const webhookInfo = await context.client.getWebhookInfo();
  }
}
```

### Error Handling

`TelegramClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.getWebhookInfo().catch((error) => {
  console.log(error); // the formatted error message
  console.log(error.stack); // stack trace of the error
  console.log(error.config); // axios request config
  console.log(error.request); // axios HTTP request
  console.log(error.response); // axios HTTP response
});
```

<br />

## Methods

All methods return a Promise.

<br />

### Webhook API

#### `getWebhookInfo` - [Official Docs](https://core.telegram.org/bots/api#getwebhookinfo)

Gets current webhook status.

Example:

```js
client.getWebhookInfo().then((info) => {
  console.log(info);
  // {
  //   url: 'https://4a16faff.ngrok.io/',
  //   hasCustomCertificate: false,
  //   pendingUpdateCount: 0,
  //   maxConnections: 40,
  // }
});
```

<br />

#### `getUpdates` - [Official Docs](https://core.telegram.org/bots/api#getupdates)

Use this method to receive incoming updates using long polling. An Array of [Update](https://core.telegram.org/bots/api#update) objects is returned.

| Param   | Type     | Description          |
| ------- | -------- | -------------------- |
| options | `Object` | Optional parameters. |

Example:

```js
client
  .getUpdates({
    limit: 10,
  })
  .then((updates) => {
    console.log(updates);
    /*
      [
        {
          updateId: 513400512,
          message: {
            messageId: 3,
            from: {
              id: 313534466,
              firstName: 'first',
              lastName: 'last',
              username: 'username',
            },
            chat: {
              id: 313534466,
              firstName: 'first',
              lastName: 'last',
              username: 'username',
              type: 'private',
            },
            date: 1499402829,
            text: 'hi',
          },
        },
        ...
      ]
    */
  });
```

<br />

#### `setWebhook(url)` - [Official Docs](https://core.telegram.org/bots/api#setwebhook)

Specifies a url and receive incoming updates via an outgoing webhook.

| Param | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| url   | `String` | HTTPS url to send updates to. |

Example:

```js
client.setWebhook('https://4a16faff.ngrok.io/');
```

<br />

#### `deleteWebhook` - [Official Docs](https://core.telegram.org/bots/api#deletewebhook)

Removes webhook integration.

Example:

```js
client.deleteWebhook();
```

<br />

<a id="send-api" />

### Send API - [Official Docs](https://core.telegram.org/bots/api#available-methods)

#### `sendMessage(chatId, text [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendmessage)

Sends text messages.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------