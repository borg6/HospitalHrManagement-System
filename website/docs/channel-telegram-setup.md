---
id: channel-telegram-setup
title: Telegram Setup
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/h5Mg8gNp8vk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/>

☝️By Bottender, you can begin your first Telegram Bot in 3 mins!!

## Enabling Telegram Channels

To enable Telegram channels, you can start either from new or existing Bottender apps.

### New Bottender Apps

**Create Bottender App** is the best way to start building a new app in Bottender.

To create a project, run:

```sh
npx create-bottender-app my-app
```

Make sure to select the `telegram` option:

![](https://user-images.githubusercontent.com/3382565/67851226-f2b7f200-fb44-11e9-951d-c0050db88ed3.png)

After you go through the steps, `bottender.config.js` and `.env` are generated automatically for further channel settings.

### Existing Bottender Apps

First, you must have a `bottender.config.js` file includes the following settings:

```js
module.exports = {
  channels: {
    telegram: {
      enabled: true,
      path: '/webhooks/telegram',
      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,
    },
  },
};
```

Make sure to set the `channels.telegram.enabled` field to `true`.

By default, the Bottender server listens to the Telegram requests on the `/webhooks/telegram` path. However, you can overwrite the path by ass