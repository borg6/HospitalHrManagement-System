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
  //   url: 'https://4a16faff.n