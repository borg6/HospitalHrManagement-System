---
id: api-slack-client
title: SlackClient
---

- [Usage](#usage)
- [Methods](#methods)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `SlackOAuthClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('slack');

// `client` is a `SlackOAuthClient` instance
const accountInfo = await context.client.getAccountInfo();
```

Or, get the `SlackOAuthClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'slack') {
    // `context.client` is a `SlackOAuthClient` instance
    const accountInfo = await context.client.getAccountInfo();
  }
}
```

### Error Handling

`SlackOAuthClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.callMethod(method, body).catch((error) => {
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

### Call Available Methods

#### `callMethod(method, body)` - [Official docs](https://api.slack.com/methods)

Call any API methods which follow [slack calling conventions](https://api.slack.com/web#basics).

| Param  | Type     | Description                                         |
| ------ | -------- | --------------------------------------------------- |
| method | `String` | One of [API Methods](https://api.slack.com/methods) |
| body   | `Object` | Body that the method needs.                         |

Example:

```js
client.callMethod('chat.postMessage', { channel: 'C8763', text: 'Hello!' });
```

<br />

### Chat API

#### `postMessage(channel, message [, options])` - [Official docs](https://api.slack.com/methods/chat.postMessage)
