---
id: api-slack-client
title: SlackClient
original_id: api-slack-client
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

Send a message to a channel.

| Param               | Type                              | Description                                                                                |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| channel             | `String`                          | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. |
| message             | <code>String &#124; Object</code> | The message to be sent, can be text message or attachment message.                         |
| options             | `Object`                          | Other optional parameters.                                                                 |
| options.accessToken | `String`                          | Custom access token of the request.                                                        |

Example:

```js
client.postMessage('C8763', { text: 'Hello!' });
client.postMessage('C8763', { attachments: [someAttachments] });
client.postMessage('C8763', 'Hello!');
client.postMessage('C8763', 'Hello!', { asUser: true });
```

If you send message with `attachments`, `messaging-api-slack` will automatically stringify the `attachments` field for you.

```js
client.postMessage(
  'C8763',
  {
    text: 'Hello!',
    attachments: [
      {
        text: 'Choose a game to play',
        fallback: 'You are unable to choose a game',
        callbackId: 'wopr_game',
        color: '#3AA3E3',
        attachmentType: 'default',
        actions: [
          {
            name: 'game',
            text: 'Chess',
            type: 'button',
            value: 'chess',
          },
        ],
      },
    ],
  },
  {
    asUser: true,
  }
);
```

<br />

#### `postEphemeral(channel, user, message [, options])` - [Official docs](https://api.slack.com/methods/chat.postEphemeral)

Send an ephemeral message to a user in a channel.

| Param               | Type                              | Description                                                                                                                     |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| channel             | `String`                          | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name.                                      |
| user                | `String`                          | `id` 