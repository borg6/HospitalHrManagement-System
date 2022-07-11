---
id: migrating-v1
title: Migrating from v0.x to v1.x
original_id: migrating-v1
---

To make bot developers have a happier development experience, we made some changes in terms of a better-structured config file, unifying cases to camel case, and introduction of two design patterns: `Router` and `Chain`.

You can follow the below guide to migrate your Bottender's code from v0.x to v1.x.

> **Note:** The following sample code is based on a Messenger bot, [tweet us](https://twitter.com/bottenderjs) if you need a sample code of other chat channels.

## Configure Session Driver and Channel Settings in `bottender.config.js`

### v0.x

In v0.x, only part of channel settings are put into `bottender.config.js` file:

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

And you need to construct a session store and bot yourself in `index.js`:

```js
// index.js
const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config').messenger;

const maxSize = 500; // The maximum size of the cache, default will be 500.

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

### v1.x

In v1.x, we move the session store settings and channel settings into `bottender.config.js`.

Also, the channel section of the config file is ready to support multiple chat channels. For each channel, you can see an extra `enable` parameter. It is handy when you want to deploy the bot on specific chat channels fir