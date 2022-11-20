---
id: api-messenger-context
title: MessengerContext
original_id: api-messenger-context
---

- [Message Content Types](#message-content-types)
- [Templates](#templates)
- [Quick Replies](#quick-replies)
- [Sender Actions](#sender-actions)
- [Targeting Broadcast Messages](#targeting-broadcast-messages)
- [User Profile API](#user-profile-api)
- [Handover Protocol API](#handover-protocol-api)

#### `sendMessage(message [, options])`

Send messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type     | Description                                                                                                                                                                                                                       |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message | `Object` | [message](https://developers.facebook.com/docs/messenger-platform/reference/send-api#message) object.                                                                                                                             |
| options | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendMessage({
  text: 'Hello!',
});
```

You can specify [messaging type](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) using options. If `messagingType` and `tag` is not provided, `UPDATE` will be used as default messaging type.

Example:

```js
context.sendMessage(
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

<a id="message-content-types" />

### Message Content Types - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-messages#content_types)

#### `sendText(text [, options])`

Send plain text messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type     | Description                                                                                                                                                                                                                       |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text    | `String` | Text of the message to be sent.                                                                                                                                                                                                   |
| options | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendText('Hello!');
```

With `CONFIRMED_EVENT_UPDATE` tag:

```js
context.sendText('Hello!', { tag: 'CONFIRMED_EVENT_UPDATE' });
```

<br />

#### `sendAttachment(attachment [, options])`

Send attachment messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param      | Type     | Description                                                                                                                                                                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attachment | `Object` | [attachment](https://developers.facebook.com/docs/messenger-platform/reference/send-api#attachment) object.                                                                                                                       |
| options    | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendAttachment({
  type: 'image',
  payload: {
    url: 'https://example.com/pic.png',
  },
});
```

<br />

#### `sendAudio(audio [, options])`

Send sounds to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| audio   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The audio to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send audio using URL string:

```js
context.sendAudio('https://example.com/audio.mp3');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendAudio({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendAudio(fs.createReadStream('audio.mp3'));
```

<br />

#### `sendImage(image [, options])`

Send images to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request). Supported formats are jpg, png and gif.

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| image   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The image to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send image using URL string:

```js
context.sendImage('https://example.com/vr.jpg');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendImage({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendImage(fs.createReadStream('vr.jpg'));
```

<br />

#### `sendVideo(video [, options])`

Send videos to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| video   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The video to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send video using URL string:

```js
context.sendVideo('https://example.com/video.mp4');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendVideo({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendVideo(fs.createReadStream('video.mp4'));
```

<br />

#### `sendFile(file [, options])`

Send files to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| file    | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The file to be sent.                                                                                                                              |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send file using URL string:

```js
context.sendFile('https://example.com/receipt.pdf');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendFile({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendFile(fs.createReadStream('receipt.pdf'));
```

<br />

<a id="templates" />

### Templates - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/templates)

#### `sendTemplate(template [, options])`

Send structured message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param    | Type     | Description                                                                                                                                                                                                                       |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| template | `Object` | Object of the template.                                                                                                                                                                                                           |
| options  | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendTemplate({
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

#### `sendButtonTemplate(title, buttons [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)

Send button message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410664-0b80b080-27dc-11e8-8854-4408d6f32fdf.png" alt="sendButtonTemplate" width="250" />

| Param   | Type       | Description                                                                                                                                                         |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title   | `String`   | Text that appears above the buttons.                                                                                                                                |
| buttons | `Object[]` | Array of [button](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button#button). Set of 1-3 buttons that appear as call-to-actions. |
| options | `Object`   | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types).                   |

Example:

```js
context.sendButtonTemplate('What do you want to do next?', [
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

#### `sendGenericTemplate(elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template)

Send generic message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410502-bf948426-27db-11e8-8c9d-7fd6158d0cc2.png" alt="sendGenericTemplate" width="750" />

| Param    | Type       | Description                                                                                                                                                                                                                                       |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| elements | `Object[]` | Array of [element](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic#element). Data for each bubble in message.                                                                                              |
| options  | `Object`   | Other optional parameters, such as `imageAspectRatio`, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) and [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendGenericTemplate(
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
context.sendGenericTemplate(
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
- `HUMAN_AGENT`

<br />

#### `sendMediaTemplate(elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-messages/template/media)

Send media message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410836-64249ada-27dc-11e8-8dc4-5a155916961a.png" alt="sendMediaTemplate" width="250" />

| Param    | Type       | Description                                                                                                                                       |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| elements | `Object[]` | Array of [element](https://developers.facebook.com/docs/messenger-platform/reference/template/media#payload). Only one element is allowed.        |
| options  | `Object`   | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types).