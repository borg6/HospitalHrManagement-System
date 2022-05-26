
---
id: the-basics-routing
title: Routing
original_id: the-basics-routing
---

`Routing` is a handy design pattern to help you organize bot actions.

The most basic Bottender `Route` is composed of a text and an action, providing a straightforward and expressive definition:

```js
const { router, text } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function SayHello(context) {
  await context.sendText('Hello!');
}
