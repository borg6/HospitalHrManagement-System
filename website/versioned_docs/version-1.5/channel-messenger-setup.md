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

By default, the Bottender server listens to the Messenger requests on the `/webhooks/messenger` path. However, you can overwrite the path by assigning the preferred webhook path in the `channels.messenger.path` field.

We highly recommend setting your sensitive config using `process.env`, so you could avoid any credentials get exposed.

## Environment Configuration

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

### Prepare `MESSENGER_APP_ID` and `MESSENGER_APP_SECRET`

Traverse to [Your Facebook Apps](https://developers.facebook.com/apps) → \${Your App Page} → Settings → Basic.

You can see your App ID and App Secret. Facebook will ask your Facebook password again before display your App Secret. Fill these two values to `MESSENGER_APP_ID` and `MESSENGER_APP_SECRET` in `.env`.

![](https://user-images.githubusercontent.com/662387/71390359-fe9ecc80-263a-11ea-9a3a-e7188