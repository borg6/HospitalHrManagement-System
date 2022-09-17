---
id: channel-viber-routing
title: Viber Routing
original_id: channel-viber-routing
---

Bottender offers a bunch of helpers to route within your Viber or multi-platform app. For example, you may use Viber particular routes within your [`router`](the-basics-routing.md):

```js
const { router, viber } = require('bottender/router');

function App() {
  return router([
    viber.message(H