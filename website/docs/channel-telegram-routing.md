---
id: channel-telegram-routing
title: Telegram Routings
---

Bottender offers a bunch of helpers to route within your Telegram or multi-platform app. For example, you may use Telegram particular routes within your `router`:

```js
const { router, telegram } = require('bottender/router');

function App() {
  return router([
    telegram.message(H