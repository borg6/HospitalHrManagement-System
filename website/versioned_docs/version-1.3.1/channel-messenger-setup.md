---
id: channel-messenger-setup
title: Messenger Setup
original_id: channel-messenger-setup
---

## Requirements

Before going further, we assume that you have already prepared:

- A Facebook Developer account
- A Facebook App for your Messenger Bot
- A Facebook Page for your Messenger Bot

> **Note:** If you are not familiar with Facebook App, you can refer to Facebook's official doc, [Setting Up Your Facebook App](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup/).

## Enabling Messenger Channels

To enable Messenger channels, you can start either from new or existing Bottender apps.

### New Bottender Apps

**Create Bottender App** is the best way to start building a new app in Bottender.

To create a project, run:

```sh
npx create-bottender-app my-app
```

Make sure to select the `messenger` option:

![](https://user-images.githubusercontent.com/3382565/67851223-f2b7f200-fb44-11e9-960a-4f58d68ab37d.png)

After you go through the steps, `bottender.config.js` and `.env` are generated automatically for further channel settings.

### Existing Bottender Apps

First, you must have a `bottender.config.js` file includes the following settings:

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

Make sure to set the `channels.messenger.enabled` field to `true`.

By default, the Bottender server listens to the Messenger requests on the `/