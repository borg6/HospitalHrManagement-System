---
id: channel-messenger-setup
title: Messenger Setup
original_id: channel-messenger-setup
---

## Enable Messenger Channel

### Create a New Messenger Bottender App

`Create Bottender App` is the best way to start building a new application in Bottender.

To create a project, run:

```sh
npx create-bottender-app my-app
```

Make sure that you checked the `messenger` option:

![](https://user-images.githubusercontent.com/3382565/67851223-f2b7f200-fb44-11e9-960a-4f58d68ab37d.png)

After finishing the `Create Bottender App` process, `bottender.config.js,` a config file is generated automatically for further channel settings.

### Enable Messenger Channel for Existing Apps

First, you need to have a `bottender.config.js` file that sets `channels.messenger.enabled` as `true`:

```js
module.exports = {
  channels: {
    messenger: {
      enabled: true,
      path: '/webhooks/messenger',
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
    },
  },
};
```

By default, webhook listens on path - `/webhooks/messenger`.
You can set your webhook path in the `path` field.

## Complete Messenger Channel Settings

When you run a Bottender app, Bottender loads environment variables in the config file, `bottender.config.js`. Then, `bottender.config.js` loads sensitive or environment-dependent variables in `.env`.

To make a Messenger Bot works, you have to fill in the below environment variables in `.env`.

```
# .env

MESSENGER_PAGE_ID=
MESSENGER_ACCESS_TOKEN=
MESSENGER_APP_ID=
MESSENGER_APP_SECRET=
MESSENGER_VERIFY_TOKEN=
```

Before going further, we assumed that you have already prepared:

- A Facebook Developer account
- A Facebook App for your Messenger Bot
- A Facebook Page for your Messenger Bot
- A Bottender Project

> **Note:** If you are not familiar with Facebook App, you can refer to Facebook's official doc, [Setting Up Your Facebook App](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup/).

Then you can open your App page and ready to 