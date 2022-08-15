---
id: channel-whatsapp-routing
title: WhatsApp Routing
original_id: channel-whatsapp-routing
---

Bottender offers a bunch of helpers to route within your WhatsApp or multi-platform app. For example, you may use WhatsApp particular routes within your [`router`](the-basics-routing.md):

```js
const { router, whatsapp } = require('bottender/router');

function App() {
  return router([
    whatsapp.message(HandleMessage),
    whatsapp.media(HandleMedia),
    whatsapp.received(HandleReceived),
    whatsapp.sent(HandleSent),
    whatsapp.delivered(HandleDelivered),
    whatsapp.read(HandleRead),
    whatsapp(HandleWhatsapp),
  ]);
}

/* Note: You need to implement those functions */
async function HandleMessage(context) {}
async function HandleMedia(context) {}
async function HandleReceived(context) {}
async function HandleSent(context) {}
async function HandleDelivered(context) {}
async function HandleRead(c