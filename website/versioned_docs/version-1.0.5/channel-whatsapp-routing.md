---
id: channel-whatsapp-routing
title: WhatsApp Routing
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
    whatsapp.any(HandleWhatsapp),
  ]);
}

/* Note: You need to implement those functions */
async function HandleMes