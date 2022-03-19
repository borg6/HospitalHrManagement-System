---
id: api-console-event
title: ConsoleEvent
---

#### `rawEvent`

Underlying raw event from Console.

Example:

```js
event.rawEvent;
// {
//   message: {
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

The message object from Console raw event.

Example:

```js
event.message;
// {
//   text: 'Awesome.',
// }
```

#### `isText`

Determine if the ev