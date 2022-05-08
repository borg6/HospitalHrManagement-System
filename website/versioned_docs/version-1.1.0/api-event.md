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
    await context.sendT