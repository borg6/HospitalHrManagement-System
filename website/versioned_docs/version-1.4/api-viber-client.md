---
id: api-viber-client
title: ViberClient
original_id: api-viber-client
---

- [Usage](#usage)
- [Methods](#methods)
  - [Webhook API](#webhook-api)
  - [Send API](#send-api)
  - [Keyboards](#keyboards)
  - [Broadcast API](#broadcast-api)
  - [Get Account Info](#get-account-info)
  - [Get User Details](#get-user-details)
  - [Get Online](#get-online)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `ViberClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('viber');

// `client` is a `ViberClient` instance
const accountInfo = await context.client.getAccountInfo();
```

Or, get the `ViberClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'viber') {
    // `context.client` is a `ViberClient` instance
    const accountInfo = await context.client.getAccountInfo();
  }
}
```

### Error Handling

`ViberClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.setWebhook(url).catch((error) => {
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

#### `setWebhook(url [, eventTypes])`

Setting a Webhook.

| Param      | Type            | Description                                                                                                                                                                                          |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | `String`        | HTTPS Account webhook URL to receive callbacks & messages from users.                                                                                                                                |
| eventTypes | `Array<String>` | Indicates the types of Viber events that the account owner would like to be notified about. Possible values: `delivered`, `seen`, `failed`, `subscribed`, `unsubscribed` and `conversation_started`. |

Example:

```js
client.setWebhook('https://4a16faff.ngrok.io/');
```

You can filter event types using optional parameter:

```js
client.setWebhook('https://4a16faff.ngrok.io/', [
  'delivered',
  'seen',
  'conversation_started',
]);
```

<br />

#### `removeWebhook`

Removing your webhook.

Example:

```js
client.removeWebhook();
```

<br />

### Send API

#### `sendMessage(receiver, message)` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#send-message)

Sending a message to a user.

| Param    | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| receiver | `String` | Unique Viber user id.           |
| message  | `Object` | Message and options to be sent. |

Example:

```js
client.sendMessage(USER_ID, {
  type: 'text',
  text: 'Hello',
});
```

> Note: Maximum total JSON size of the request is 30kb.

<br />

#### `sendText(receiver, text [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#text-message)

Sending a text message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481925-61e46008-aeeb-11e7-842f-79fee8066c6a.jpg" width="300" />

| Param    | Type     | Description                |
| -------- | -------- | -------------------------- |
| receiver | `String` | Unique Viber user id.      |
| text     | `String` | The text of the message.   |
| options  | `Object` | Other optional parameters. |

Example:

```js
client.sendText(USER_ID, 'Hello');
```

