---
id: api-messenger-client
title: MessengerClient
---

- [Usage](#usage)
- [Methods](#methods)
  - [Send API](#send-api)
    - [Content Types](#content-types)
    - [Templates](#templates)
    - [Quick Replies](#quick-replies)
    - [Sender Actions](#sender-actions)
    - [Attachment Upload API](#attachment-upload-api)
    - [Message Batching](#message-batching)
  - [User Profile API](#user-profile-api)
  - [Messenger Profile API](#messenger-profile-api)
    - [Persistent Menu](#persistent-menu)
    - [Get Started Button](#get-started-button)
    - [Greeting Text](#greeting-text)
    - [Whitelisted Domains](#domain-whitelist)
    - [Account Linking URL](#account-linking-url)
    - [Target Audience](#target-audience)
    - [Chat Extension Home URL](#chat-extension-home-url)
  - [Handover Protocol API](#handover-protocol-api)
  - [Page Messaging Insights API](#page-messaging-insights-api)
  - [Built-in NLP API](#built-in-nlp-api)
  - [Event Logging API](#event-logging-api)
  - [ID Matching API](#id-matching-api)
  - [Persona API](#persona-api)
  - [Others](#others)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `MessengerClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('messenger');

// `client` is a `MessengerClient` instance
await client.sendRawBody(body);
```

Or, get the `MessengerClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'messenger') {
    // `context.client` is a `MessengerClient` instance
    await context.client.sendRawBody(body);
  }
}
```

### Error Handling

`MessengerClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.sendRawBody(body).catch((error) => {
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

<a id="send-api" />

### Send API - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference)

#### `sendRawBody(body)`

Send request raw body using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| body  | `Object` | Raw body to be sent. |

Example:

```js
client.sendRawBody({
  recipient: {
    id: USER_ID,
  },
  message: {
    text: 'Hello!',
  },
});
```

<br />

#### `sendMessage(userId, message [, options])`

Send messages to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                              | Description                                                                                                                                                                                                                       |
| ------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId  | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                                                                                 |
| message | `Object`                          | [message](https://developers.facebook.com/docs/messenger-platform/reference/send-api#message) object.                                                                                                                             |
| options | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
client.sendMessage(USER_ID, {
  text: 'Hello!',
});
```

You can specify [messaging type](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) using options. If `messagingType` and `tag` is not provided, `UPDATE` will be used as default messaging type.

Example:

```js
client.sendMessage(
  USER_ID,
  {
    text: 'Hello!',
  },
  {
    messagingType: 'RESPONSE',
  }
);
```

Available messaging types:

- `UPDATE` as default
- `RESPONSE` using `{ messagingType: 'RESPONSE' }` options
- `MESSAGE_TAG` using `{ tag: 'ANY_TAG' }` options

<br />

<a id="content-types" />

### Content Types - [Content types](https://developers.facebook.com/docs/messenger-platform/send-api-reference/contenttypes)

#### `sendText(userId, text [, options])`

Send plain text messages to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                              | Description                                                                                                                                                                                                                       |
| ------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId  | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                                                                                 |
| text    | `String`                          | Text of the message to be sent.                                                                                                                                                                                                   |
| options | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
client.sendText(USER_ID, 'Hello!', { tag: 'CONFIRMED_EVENT_UPDATE' });
```

<br />

#### `sendAttachment(userId, attachment [, options])`

Send attachment messages to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param            | Type                              | Description                                                                                                                                                                                                                       |
| ---------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId           | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                                                                                 |
| attachment       | `Object`                          | [attachment](https://developers.facebook.com/docs/messenger-platform/reference/send-api#attachment) object.                                                                                                                       |
| options          | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |
| options.filename | `String`                          | Required when upload from buffer.                                                                                                                                                                                                 |

Example:

```js
client.sendAttachment(USER_ID, {
  type: 'image',
  payload: {
    url: 'https://example.com/pic.png',
  },
});
```

<br />

#### `sendAudio(userId, audio [, options])`

Send sounds to specified user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param            | Type                                                                         | Description                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId           | <code>String &#124; Object</code>                                            | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object. |
| audio            | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The audio to be sent.                                                                                                                             |
| options          | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |
| options.filename | `String`                                                                     | Required when upload from buffer.                                                                                                                 |

Example:

- Send audio using a URL string:

```js
client.sendAudio(USER_ID, 'https://example.com/audio.mp3');
```

- Use `AttachmentPayload` to send cached attachment:

```js
client.sendAudio(USER_ID, { attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

client.sendAudio(USER_ID, fs.createReadStream('audio.mp3'));
```

- Use `Buffer` to send attachment:

```js
client.sendAudio(USER_ID, buffer, { filename: 'audio.mp3' });
```

<br />

#### `sendImage(userId, image [, options])`

Send images to specified user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request). Supported formats are jpg, png and gif.

| Param            | Type                                                                         | Description                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId           | <code>String &#124; Object</code>                                            | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object. |
| image            | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The image to be sent.                                                                                                                             |
| options          | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |
| options.filename | `String`                                                                     | Required when upload from buffer.                      