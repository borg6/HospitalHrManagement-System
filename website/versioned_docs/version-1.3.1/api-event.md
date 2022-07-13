---
id: api-event
title: Event
original_id: api-event
---

Bottender event helps you determine what kind of message is sent from user.

You can access `context.event` object within your handlers as the following example shows.

```js
async function MyAction(context) {
  if (context.event.isText) {
    await context.sendText('I know you sent text message.');
  } else {
    await context.sendText('I know you did not send text message.');
  }
}
```

For platform specific events, please check out following links:

| Platform                                | Doc                                                |
| --------------------------------------- | -------------------------------------------------- |
| Console                                 | [APIReference-ConsoleEvent](api-console-event)     |
| [Messenger](https://www.messenger.com/) | [APIReference-MessengerEvent](api-messenger-event) |
| [LINE](https://line.me/)                | [APIReference-LineEvent](api-line-event)           |
| [Slack](https://slack