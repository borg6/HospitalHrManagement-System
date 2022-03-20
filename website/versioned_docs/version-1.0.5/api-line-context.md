---
id: api-line-context
title: LineContext
original_id: api-line-context
---

- [Reply API](#reply-api)
  - [Imagemap Message](#reply-imagemap-message)
  - [Template Messages](#reply-template-messages)
  - [Flex Messages](#reply-flex-messages)
- [Push API](#push-api)
  - [Imagemap Message](#push-imagemap-message)
  - [Template Messages](#push-template-messages)
  - [Flex Messages](#push-flex-messages)
- [Quick Replies](#quick-replies)
- [Profile API](#profile-api)
- [Group/Room Member Profile API](#grouproom-member-profile-api)
- [Group/Room Member IDs API](#grouproom-member-ids-api)
- [Leave API](#leave-api)
- [Rich Menu API](#rich-menu-api)
- [Account Link API](#account-link-api)

<a id="reply-api" />

### Reply API - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#send-reply-message)

Responds to events from users, groups, and rooms.

#### `reply(messages)`

Responds messages to the receiver using reply token.

| Param    | Type       | Description                                                             |
| -------- | ---------- | ----------------------------------------------------------------------- |
| messages | `Object[]` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
context.reply([
  {
    type: 'text',
    text: 'Hello!',
  },
]);
```

`replyToken` can only be used once, but you can send up to 5 messages using the same token.

```js
const { Line } = require('messaging-api-line');

context.reply([
  Line.createText('Hello'),
  Line.createImage({
    originalContentUrl: 'https://example.com/original.jpg',
    previewImageUrl: 'https://example.com/preview.jpg',
  }),
  Line.createText('End'),
]);
```

<br />

#### `replyText(text)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#text-message)

Responds text message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/text-bf530b30.png" width="250px" />

You can include LINE original emoji in text messages using character codes. For a list of LINE emoji that can be sent in LINE chats, see the [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/emoji-b3285d27.png" width="250px" />

| Param | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| text  | `String` | Text of the message to be sent. |

Example:

```js
context.replyText('Hello!');
```

<br />

#### `replyImage(imageUrl, previewImageUrl)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#image-message)

Responds image message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/image-167efb33.png" width="250px" /><img src="https://developers.line.me/media/messaging-api/messages/image-full-04fbba55.png" width="250px" />

| Param           | Type     | Description        |
| --------------- | -------- | ------------------ |
| imageUrl        | `String` | Image URL.         |
| previewImageUrl | `String` | Preview image URL. |

Example:

```js
context.replyImage({
  originalContentUrl: 'https://example.com/original.jpg',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyVideo(videoUrl, previewImageUrl)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#video-message)

Responds video message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/video-a1bc08a4.png" width="250px" />

| Param           | Type     | Description           |
| --------------- | -------- | --------------------- |
| videoUrl        | `String` | URL of video file.    |
| previewImageUrl | `String` | URL of preview image. |

Example:

```js
context.replyVideo({
  originalContentUrl: 'https://example.com/original.mp4',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyAudio(audioUrl, duration)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#audio-message)

Responds audio message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/audio-6290d91b.png" width="250px" />

| Param    | Type     | Description           |
| -------- | -------- | --------------------- |
| audioUrl | `String` | URL of audio file.    |
| duration | `Number` | Length of audio file. |

Example:

```js
context.replyAudio({
  originalContentUrl: 'https://example.com/original.m4a',
  duration: 240000,
});
```

<br />

#### `replyLocation(location)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#location-message)

Responds location message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/location-8f9b6b79.png" width="250px" />

| Param              | Type     | Description                            |
| ------------------ | -------- | -------------------------------------- |
| location           | `Object` | Object contains location's parameters. |
| location.title     | `String` | Title of the location.                 |
| location.address   | `String` | Address of the location.               |
| location.latitude  | `Number` | Latitude of the location.              |
| location.longitude | `Number` | Longitude of the location.             |

Example:

```js
context.replyLocation({
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

<br />

#### `replySticker(packageId, stickerId)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#sticker-message)

Responds sticker message to the receiver using reply token.  
For a list of stickers that can be sent with the Messaging API, see the [sticker list](https://developers.line.me/media/messaging-api/messages/sticker_list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/sticker-cb1a6a3a.png" width="250px" />

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| packageId | `String` | Package ID. |
| stickerId | `String` | Sticker ID. |

Example:

```js
context.replySticker({ packageId: '1', stickerId: '1' });
```

<br />

### Reply Imagemap Messag