---
id: api-telegram-context
title: TelegramContext
original_id: api-telegram-context
---

- [Send API](#send-api)
- [Get API](#get-api)
- [Updating API](#updating-api)
- [Group API](#group-api)
- [Payments API](#payments-api)
- [Inline Mode API](#inline-mode-api)
- [Game API](#game-api)
- [Others](#others)

<a id="send-api" />

### Send API - [Official Docs](https://core.telegram.org/bots/api#available-methods)

#### `sendMessage(text [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendmessage)

Sends text messages.

| Param   | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| text    | `String` | Text of the message to be sent. |
| options | `Object` | Other optional parameters.      |

Exmaple:

```js
context.sendMessage('hi', {
  disableWebPagePreview: true,
  disableNotification: true,
});
```

<br />

#### `sendPhoto(photo [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendphoto)

Sends photos.

| Param   | Type     | Description                                             |
| ------- | -------- | ------------------------------------------------------- |
| photo   | `String` | Pass a file id (recommended) or HTTP URL to send photo. |
| options | `Object` | Other optional parameters.                              |

Example:

```js
context.sendPhoto('https://example.com/image.png', {
  caption: 'gooooooodPhoto',
  disableNotification: true,
});
```

<br />

#### `sendAudio(audio [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendaudio)

Sends audio files.

| Param   | Type     | Description                                             |
| ------- | -------- | ------------------------------------------------------- |
| audio   | `String` | Pass a file id (recommended) or HTTP URL to send audio. |
| options | `Object` | Other optional parameters.                              |

Example:

```js
context.sendAudio('https://example.com/audio.mp3', {
  caption: 'gooooooodAudio',
  disableNotification: true,
});
```

<br />

#### `sendDocument(document [, options])` - [Official Docs](https://core.telegram.org/bots/api/#senddocument)

Sends general files.

| Param    | Type     | Description                                                |
| -------- | -------- | ---------------------------------------------------------- |
| document | `String` | Pass a file id (recommended) or HTTP URL to send document. |
| options  | `Object` | Other optional parameters.                                 |

Example:

```js
context.sendDocument('https://example.com/doc.gif', {
  caption: 'gooooooodDocument',
  disableNotification: true,
});
```

<br />

#### `sendSticker(sticker [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendsticker)

Sends `.webp` stickers.

| Param   | Type     | Description                                               |
| ------- | -------- | --------------------------------------------------------- |
| sticker | `String` | Pass a file id (recommended) or HTTP URL to send sticker. |
| options | `Object` | Other optional parameters.                                |

Example:

```js
context.sendSticker('CAADAgADQAADyIsGAAE7MpzFPFQX5QI', {
  disableNotification: true,
});
```

<br />

#### `sendVideo(video [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvideo)

Sends video files, Telegram clients support `mp4` videos (other formats may be sent as Document).

| Param   | Type     | Description                                             |
| ------- | -------- | ------------------------------------------------------- |
| video   | `String` | Pass a file id (recommended) or HTTP URL to send video. |
| options | `Object` | Other optional parameters.                              |

Example:

```js
context.sendVideo('https://example.com/video.mp4', {
  caption: 'gooooooodVideo',
  disableNotification: true,
});
```

<br />

#### `sendVoice(voice [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvoice)

Sends audio files.

| Param   | Type     | Description                                             |
| ------- | -------- | ------------------------------------------------------- |
| voic