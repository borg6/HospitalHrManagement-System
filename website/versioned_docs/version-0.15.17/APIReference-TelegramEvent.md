---
id: api-telegramevent
title: TelegramEvent
original_id: api-telegramevent
---

#### `rawEvent`

Underlying raw event from Telegram.

Example:

```js
event.rawEvent;
// {
//   message: {
//     message_id: 666,
//     from: {
//       id: 427770117,
//       is_bot: false,
//       first_name: 'first',
//       last_name: 'last',
//       language_code: 'en',
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

