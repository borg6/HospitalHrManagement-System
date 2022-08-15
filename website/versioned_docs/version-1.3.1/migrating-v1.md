
---
id: migrating-v1
title: Migrating from v0.x to v1
original_id: migrating-v1
---

To make bot developers have happier development experience, we made the following changes:

- Improving the structure of the configuration file
- Using camel case consistently
- Introducing two new patterns: [Routing](the-basics-routing.md) and [Chain of Responsibility](the-basics-chain.md)

You can follow the steps below to migrate your Bottender application from v0.x to v1.

> **Note:** The following code samples are based on the Messenger bots, but you can still apply a similar strategy to your bots on any other platforms.

## Configuring Session Driver and Channel Settings in `bottender.config.js`

### v0.x

In Bottender v0.x, the `bottender.config.js` file only includes part of the channel settings:

```js
// bottender.config.js
module.exports = {
  messenger: {
    accessToken: '__FILL_YOUR_TOKEN_HERE__',
    appSecret: '__FILL_YOUR_SECRET_HERE__',
    verifyToken: '__FILL_YOUR_VERIFYTOKEN_HERE__',
  },
};
```

So, you must construct a session store and a bot instance yourself in the `index.js` file:

```js
// index.js
const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config').messenger;

const maxSize = 500; // The maximum size of the cache, default is 500.

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
  verifyToken: config.verifyToken,
  sessionStore: new MemorySessionStore(maxSize),
});

bot.onEvent(async (context) => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
```

### v1

In Bottender v1, the better `bottender.config.js` file includes the session store settings and the channel settings. The config file supports multiple chat channels out of the box. For each channel, you can enable and disable the channel by modifying the `enable` field:

```js
// bottender.config.js
module.exports = {
  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500, // The maximum size of the cache, default is 500.
      },
    },
  },

  channels: {
    messenger: {
      enabled: true, // Modify this boolean value to enable or disable