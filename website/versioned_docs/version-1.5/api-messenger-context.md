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
| f