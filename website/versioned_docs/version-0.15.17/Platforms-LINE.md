---
id: line
title: LINE
original_id: line
---

This guide will give you some basic concepts of LINE bots. For more information, check [official docs](https://developers.line.me/en/docs/messaging-api/building-bot/).

## Requirements

- LINE@ account
- LINE Messaging API channel
  - access token
  - channel secret

You need a [LINE@](http://at.line.me/) account and a **channel** connected to that account to develop a LINE bot. You need the channel's **access token** and **channel secret** when you start.

### LINE@

You need a [LINE@](http://at.line.me/) account for your bot to connect to. You can register a **standard account** or an **approved account** [here](https://entry-at.line.me/).

After that, you can manage your LINE@ accounts at [LINE@ MANAGER](https://admin-official.line.me/) and set them up to use **Messaging API** for bots to connect to.

### LINE Developers

After setting up LINE@ accounts to use Messaging API, further setup such as **webhook**, **access token** can be found at [LINE developers](https://developers.line.me). A **LINE Login** app or a **Messaging API** app is called a **channel** here.

## Build Your First LINE Bot

Check out your channel's **access token** and **channel secret** at [LINE developers](https://developers.line.me) then fill them in [line-hello-world](https://github.com/Yoctol/bottender/blob/master/examples/line-hello-world/index.js) example:

```js
const { LineBot } = require('bottender');

const bot = new LineBot({
  channelSecret: '__FILL_YOUR_SECRET_HERE__',
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
});
```

Then run your server and try it out by talking to your LINE@ account!

## Event Types

There are many different types of events your bot may receive from LINE. In Bottender, you can access them via `context.event`. For more information, check [LineEvent Reference](api-lineevent) and [official docs](https://developers.line.me/en/docs/messaging-api/reference/#webhook-event-objects).

- Message event
  - Text
  - Image
  - Video
  - Audio
  - File
  - Location
  - Sticker
- Follow event
- Unfollow event
- Join event
- 