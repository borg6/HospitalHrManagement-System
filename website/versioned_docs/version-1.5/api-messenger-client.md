---
id: api-messenger-client
title: MessengerClient
original_id: api-messenger-client
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
| options.filename | `String`                                                                     | Required when upload from buffer.                                                                                                                 |

Example:

- Send image using a URL string:

```js
client.sendImage(USER_ID, 'https://example.com/vr.jpg');
```

- Use `AttachmentPayload` to send cached attachment:

```js
client.sendImage(USER_ID, { attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

client.sendImage(USER_ID, fs.createReadStream('vr.jpg'));
```

- Use `Buffer` to send attachment:

```js
client.sendImage(USER_ID, buffer, { filename: 'vr.jpg' });
```

<br />

#### `sendVideo(userId, video [, options])`

Send videos to specified user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param            | Type                                                                         | Description                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId           | <code>String &#124; Object</code>                                            | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object. |
| video            | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The video to be sent.                                                                                                                             |
| options          | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |
| options.filename | `String`                                                                     | Required when upload from buffer.                                                                                                                 |

Example:

- Send video using a URL string:

```js
client.sendVideo(USER_ID, 'https://example.com/video.mp4');
```

- Use `AttachmentPayload` to send cached attachment:

```js
client.sendVideo(USER_ID, { attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

client.sendVideo(USER_ID, fs.createReadStream('video.mp4'));
```

- Use `Buffer` to send attachment:

```js
client.sendVideo(USER_ID, buffer, { filename: 'video.mp4' });
```

<br />

#### `sendFile(userId, file [, options])`

Send files to specified user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param            | Type                                                                         | Description                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId           | <code>String &#124; Object</code>                                            | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object. |
| file             | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The file to be sent.                                                                                                                              |
| options          | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |
| options.filename | `String`                                                                     | Required when upload from buffer.                                                                                                                 |

Example:

- Send file using a URL string:

```js
client.sendFile(USER_ID, 'https://example.com/receipt.pdf');
```

- Use `AttachmentPayload` to send cached attachment:

```js
client.sendFile(USER_ID, { attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

client.sendFile(USER_ID, fs.createReadStream('receipt.pdf'));
```

- Use `Buffer` to send attachment:

```js
client.sendFile(USER_ID, buffer, { filename: 'file.pdf' });
```

<br />

<a id="templates" />

### Templates - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/templates)

#### `sendTemplate(userId, template [, options])`

Send structured message templates to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param    | Type                              | Description                                                                                                                                                                                                                       |
| -------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId   | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                                                                                 |
| template | `Object`                          | Object of the template.                                                                                                                                                                                                           |
| options  | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
client.sendTemplate(USER_ID, {
  templateType: 'button',
  text: 'title',
  buttons: [
    {
      type: 'postback',
      title: 'Start Chatting',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ],
});
```

<br />

#### `sendButtonTemplate(userId, title, buttons [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)

Send button message templates to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410664-0b80b080-27dc-11e8-8854-4408d6f32fdf.png" alt="sendButtonTemplate" width="250" />

| Param   | Type                              | Description                                                                                                                                                         |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId  | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                   |
| title   | `String`                          | Text that appears above the buttons.                                                                                                                                |
| buttons | `Array<Object>`                   | Array of [button](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button#button). Set of 1-3 buttons that appear as call-to-actions. |
| options | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types).                   |

Example:

```js
client.sendButtonTemplate(USER_ID, 'What do you want to do next?', [
  {
    type: 'web_url',
    url: 'https://petersapparel.parseapp.com',
    title: 'Show Website',
  },
  {
    type: 'postback',
    title: 'Start Chatting',
    payload: 'USER_DEFINED_PAYLOAD',
  },
]);
```

<br />

#### `sendGenericTemplate(userId, elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template)

Send generic message templates to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410502-bf948426-27db-11e8-8c9d-7fd6158d0cc2.png" alt="sendGenericTemplate" width="750" />

| Param    | Type                              | Description                                                                                                                                                                                                                                       |
| -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId   | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object.                                                                                                 |
| elements | `Array<Object>`                   | Array of [element](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic#element). Data for each bubble in message.                                                                                              |
| options  | `Object`                          | Other optional parameters, such as `imageAspectRatio`, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) and [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
client.sendGenericTemplate(
  USER_ID,
  [
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
  ],
  { imageAspectRatio: 'square' }
);
```

Adding a [tag](https://developers.facebook.com/docs/messenger-platform/message-tags) to a message allows you to send it outside the 24+1 window, for a limited number of use cases, per [Messenger Platform policy](https://developers.facebook.com/docs/messenger-platform/policy-overview).

Example:

```js
client.sendGenericTemplate(
  USER_ID,
  [
    {
      // ...
    },
  ],
  { tag: 'CONFIRMED_EVENT_UPDATE' }
);
```

Available tags:

- `CONFIRMED_EVENT_UPDATE`
- `POST_PURCHASE_UPDATE`
- `ACCOUNT_UPDATE`
- `HUMAN_AGENT` (Closed BETA)

<br />

#### `sendMediaTemplate(userId, elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-messages/template/media)

Send media message templates to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410836-64249ada-27dc-11e8-8dc4-5a155916961a.png" alt="sendMediaTemplate" width="250" />

| Param    | Type                              | Description                                                                                                                                       |
| -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId   | <code>String &#124; Object</code> | Page-scoped user ID of the recipient or [recipient](https://developers.facebook.com/docs/messenger-platform/send-api-reference#recipient) object. |
| elements | `Array<Object>`                   | Array of [element](https://developers.facebook.com/docs/messenger-platform/reference/template/media#payload). Only one element is allowed.        |
| options  | `Object`                          | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

```js
client.sendMediaTemplate(USER_ID, [
  {
    mediaType: 'image',
    attachmentId: '1854626884821032',
    buttons: [
      {
        type: 'web_url',
        url: 'https://en.wikipedia.org/wiki/Rickrolling',
        title: 'View Website',
      },
    ],
  },
]);
```

<br />

#### `sendReceiptTemplate(userId, receipt [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template)

Send receipt message templates to specified user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request)