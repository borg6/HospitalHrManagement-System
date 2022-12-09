---
id: api-telegram-event
title: TelegramEvent
original_id: api-telegram-event
---

#### `rawEvent`

Underlying raw event from Telegram.

Example:

```js
event.rawEvent;
// {
//   message: {
//     messageId: 666,
//     from: {
//       id: 427770117,
//       isBot: false,
//       firstName: 'first',
//       lastName: 'last',
//       languageCode: 'en',
//     },
//     chat: {
//       id: 427770117,
//       first_name: 'first',
//       last_name: 'last',
//       type: 'private',
//     },
//     date: 1499402829,
//     text: 'text',
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

The message object from Telegram raw event.

Example:

```js
event.message;
// {
//   message_id: 666,
//   from: {
//     id: 427770117,
//     is_bot: false,
//     first_name: 'first',
//     last_name: 'last',
//     language_code: 'en',
//   },
//   chat: {
//     id: 427770117,
//     first_name: 'first',
//     last_name: 'last',
//     type: 'private',
//   },
//   date: 1499402829,
//   text: 'text',
// }
```

#### `isText`

Determine if the event is a message event which includes text.

Example:

```js
event.isText; // true
```

#### `text`

The text string from Telegram raw event.

Example:

```js
event.text; // 'text'
```

#### `isAudio`

Determine if the event is a message event which includes audio.

Example:

```js
event.isAudio; // true
```

#### `audio`

The audio object from Telegram raw event.

Example:

```js
event.audio;
// {
//   file_id: '321',
//   duration: 100,
//   title: 'audioooooooo',
// }
```

#### `isDocument`

Determine if the event is a message event which includes document.

Example:

```js
event.isDocument; // true
```

#### `document`

The document object from Telegram raw event.

Example:

```js
event.document;
// {
//   file_id: '234',
//   file_name: 'file',
// }
```

#### `isGame`

Determine if the event is a message event which includes game.

Example:

```js
event.isGame; // true
```

#### `game`

The game object from Telegram raw event.

Example:

```js
event.game;
// {
//   title: 'gammmmmmmme',
//   description: 'Description of the game',
//   photo: [
//     {
//       file_id: '112',
//       width: 100,
//       height: 100,
//     },
//     {
//       file_id: '116',
//       width: 50,
//       height: 50,
//     },
//   ],
// }
```

#### `isPhoto`

Determine if the event is a message event which includes photo.

Example:

```js
event.isPhoto; // true
```

#### `photo`

The photo object from Telegram raw event.

Example:

```js
event.photo;
// [
//   {
//     file_id: '112',
//     width: 100,
//     height: 100,
//   },
//   {
//     file_id: '116',
//     width: 50,
//     height: 50,
//   },
// ]
```

#### `isSticker`

Determine if the event is a message event which includes sticker.

Example:

```js
event.isSticker; // true
```

#### `sticker`

The sticker object from Telegram raw event.

Example:

```js
event.sticker;
// {
//   file_id: '123',
//   width: 50,
//   height: 50,
// }
```

#### `isVideo`

Deter