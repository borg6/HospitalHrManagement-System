---
id: api-line-client
title: LineClient
---

- [Usage](#usage)
- [Methods](#methods)
  - [Reply API](#reply-api)
    - [Imagemap Messages](#reply-imagemap-messages)
    - [Template Messages](#reply-template-messages)
    - [Flex Messages](#reply-flex-messages)
  - [Push API](#push-api)
    - [Imagemap Messages](#push-imagemap-messages)
    - [Template Messages](#push-template-messages)
    - [Flex Messages](#push-flex-messages)
  - [Multicast API](#multicast-api)
    - [Imagemap Messages](#multicast-imagemap-messages)
    - [Template Messages](#multicast-template-messages)
    - [Flex Messages](#multicast-flex-messages)
  - [Quick Replies](#quick-replies)
  - [Content API](#content-api)
  - [Profile API](#profile-api)
  - [Group/Room Member Profile API](#grouproom-member-profile-api)
  - [Group/Room Member IDs API](#grouproom-member-ids-api)
  - [Leave API](#leave-api)
  - [Rich Menu API](#rich-menu-api)
  - [Account Link API](#account-link-api)
  - [LINE Front-end Framework API](#liff-api)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `LineClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

// This `client` variable is a `LineClient` instance
const client = getClient('line');

await client.pushText(USER_ID, 'Hello!');
```

Or, get the `LineClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'line') {
    // `context.client` is a `LineClient` instance
    await context.client.pushText(USER_ID, 'Hello!');
  }
}
```

### Error Handling

`LineClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.replyText(token, text).catch((error) => {
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

<a id="reply-api" />

### Reply API - [Official Docs](https://developers.line.me/en/reference/messaging-api/#send-reply-message)

Responds to events from users, groups, and rooms.

#### `reply(token, messages)`

Responds messages using specified reply token.

| Param    | Type            | Description                                                             |
| -------- | --------------- | ----------------------------------------------------------------------- |
| token    | `String`        | `replyToken` received via webhook.                                      |
| messages | `Array<Object>` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
client.reply(REPLY_TOKEN, [
  {
    type: 