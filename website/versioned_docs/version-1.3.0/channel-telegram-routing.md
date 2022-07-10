---
id: channel-telegram-routing
title: Telegram Routings
original_id: channel-telegram-routing
---

Bottender offers a bunch of helpers to route within your Telegram or multi-platform application. For example, you may use Telegram particular routes within your `router`:

```js
const { router, telegram } = require('bottender/router');

function App() {
  return router([
    telegram.message(HandleMessage),
    telegram.editedMessage(HandleEditedMessage),
    telegram.channelPost(HandleChannelPost),
    telegram.editedChannelPost(HandleEditedChannelPost),
    telegram.inlineQuery(HandleInlineQuery),
    telegram.chosenInlineResult(HandleChosenInlineResult),
    telegram.callbackQuery(HandleCallbackQuery),
    telegram.shippingQuery(HandleShippingQuery),
    telegram.preCheckoutQuery(HandlePreCheckoutQuery),
    telegram.poll(HandlePoll),
    telegram(HandleTelegram),
  ]);
}

async function HandleMessage(context) {
  /* skip... */
}
async function HandleEditedMessage(context) {
  /* skip... */
}
async function HandleChannelPost(context) {
  /* skip... */
}
async function HandleEditedChannelPost(context) {
  /* skip... */
}
async function