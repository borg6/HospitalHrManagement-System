---
id: channel-line-migrating-from-sdk
title: Migrating from LINE SDK for Node.js
original_id: channel-line-migrating-from-sdk
---

## Bottender, the Ultimate Time Saver for LINE Bot Developers

Bottender aims to help LINE developers focus on project-specific business logic. It is carefully crafted to save developers' time based on real project experience.

To feel the magic of Bottender, you can check the section of comparison, [Creating a Bot Project by LINE SDK vs. Bottender.](#create-a-bot-project-by-line-sdk-vs-bottender) If you are keen on migrating your existing project to Bottender, you can jump to the section, [Migrate Your LINE SDK Bot Project to Bottender.](#migrate-your-line-sdk-bot-project-to-bottender-from-scratch)

## Create a Bot Project by LINE SDK vs. Bottender

In the following comparison, you can see a significant difference between creating an echo bot project by LINE SDK or Bottender. Comparing with the code lines of the LINE SDK project, you only need 5% code lines by Bottender.

### Create a Bot Project by LINE SDK

The sample code below is from [LINE](https://github.com/line/line-bot-sdk-nodejs/). It represents a basic bot that echoes the user's input.

```js
const express = require('express');
const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: 'YOUR_CHANNEL_ACCESS_TOKEN',
  channelSecret: 'YOUR_CHANNEL_SECRET',
};

const app = express();
app.post('/webhooks/line', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEv