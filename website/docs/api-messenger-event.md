---
id: api-messenger-event
title: MessengerEvent
---

#### `rawEvent`

Underlying raw event from Messenger.

Example:

```js
event.rawEvent;
// {
//   sender: { id: '1423587017700273' },
//   recipient: { id: '404217156637689' },
//   timestamp: 1491796363181,
//   message: {
//     mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
//     seq: 348847,
//     text: 'Awesome.',
//   },
// }
```

#### `isMessage`

Determine if the event is a message event.

Example:

```js
event.isMessage; // true
```

#### `message`

The message object from Messenger raw event.

Example:

```js
event.message;
// {
//   mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
//   seq: 348847,
//   text: 'Awesome.',
// }
```

#### `isText`

Determine if the event is a message event which includes text.

Example:

```js
event.isText; // true
```

#### `text`

The text string from Messenger raw event.

Example:

```js
event.text; // 'Awesome.'
```

#### `hasAttachment`

Determine if the event has any attachments.

Example:

```js
event.hasAttachment; // true
```

#### `attachments`

The attachments array from Messenger raw event.

Example:

```js
event.attachments;
// [
//   {
//     type: 'audio',
//     payload: {
//       url: 'https://example.com/bot/audios/audio.mp3',
//     },
//   },
// ]
```

#### `isImage`

Determine if the event is a message event which includes image attachment.

Example:

```js
event.isImage; // true
```

#### `image`

The image attachment from Messenger raw event.

Example:

```js
event.image;
// {
//   url: 'https://example.com/image.jpg',
// }
```

#### `isAudio`

Determine if the event is a message event which includes audio attachment.

Example:

```js
event.isAudio; // true
```

#### `audio`

The audio attachment from Messenger raw event.

Example:

```js
event.audio;
// {
//   url: 'https://example.com/bot/audios/audio.mp3',
// }
```

#### `isVideo`

Determine if the event is a message event which includes video attachment.

Example:

```js
event.isVideo; // true
```

#### `video`

The video attachment from Messenger raw event.

Example:

```js
event.video;
// {
//   url: 'https://example.com/bot/videos/video.mp4',
// }
```

#### `isLocation`

Determine if the event is a message event which includes location attachment.

Example:

```js
event.isLocation; // true
```

#### `location`

The location attachment from Messenger raw event.

Example:

```js
event.location;
// {
//   coordinates: { lat: 0, long: 0 },
// }
```

#### `isFile`

Determine if the event is a message event which includes file attachment.

Example:

```js
event.isFile; // true
```

#### `file`

The file attachment from Messenger raw event.

Example:

```js
event.file;
// {
//   url: 'https://example.com/bot/files/file.doc',
// }
```

#### `isFallback`

Determine if the event is a message event which includes fallback attachment.

Example:

```js
event.isFallback; // true
```

#### `fallback`

The fallback attachment from Messenger raw event.

Example:

```js
event.fallback;
// {
//   URL: 'URL_OF_THE_ATTACHMENT',
//   payload: null,
// 