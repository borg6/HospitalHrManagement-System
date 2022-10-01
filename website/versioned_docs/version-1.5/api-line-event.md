---
id: api-line-event
title: LineEvent
original_id: api-line-event
---

#### `rawEvent`

Underlying raw event from LINE.

Example:

```js
event.rawEvent;
// {
//   replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
//   type: 'message',
//   timestamp: 1462629479859,
//   source: {
//     type: 'user',
//     userId: 'U206d25c2ea6bd87c17655609a1c37cb8',
//   },
//   message: {
//     id: '325708',
//     type: 'text',
//     text: 'Hello, world',
//   },
// }
```

#### `replyToken`

The reply token from LINE raw event. Only present on message, follow, join, postback, beacon events.

Example:

```js
event.replyToken; // 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA'
```

#### `