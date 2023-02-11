---
id: channel-viber-setup
title: Viber Setup
original_id: channel-viber-setup
---

## Enabling Viber Channels

To enable Viber channels, you can start either from new or existing Bottender apps.

### New Bottender Apps

**Create Bottender App** is the best way to start building a new app in Bottender.

To create a project, run:

```sh
npx create-bottender-app my-app
```

Make sure to select the `viber` option:

![](https://user-images.githubusercontent.com/3382565/67851228-f3508880-fb44-11e9-90aa-c5bcc2d96aa2.png)

After you go through the steps, `bottender.config.js` and `.env` are generated automatically for further channel settings.

### Existing Bottender Apps

First, you must have a `bottender.config.js` file includes the following settings:

```js
module.exports = {
  channels: {
    viber: {
      enabled: true,
      path: '/webhooks/viber',
      accessToken: process.env.VIBER_ACCESS_TOKEN,
      sender: {
        name: 'Sender Name',
      },
    },
  },
};
```

Make sure to set the `channels.viber.enabled` field to `true`.

By default, the Bottender server listens to the Viber requests on the `/webhooks/viber` path. However, you can overwrite the path by assigning the preferred webhook path in the `channels.viber.path` field.

We highly recommend setting your sensitive config using `process.env`, so you could avoid any credentials get exposed.

You can find more information about `sender` field on Viber's official document, [General Send Message Parameters](https://developers.viber.