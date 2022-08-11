---
id: channel-messenger-profile
title: Messenger Profile
original_id: channel-messenger-profile
---

## Introduction

The [Messenger Profile](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/) for your Page is where you set properties that define various aspects of the following Messenger Platform features:

- [Get Started Button](channel-messenger-profile.md#setting-get-started-button)
- [Persistent Menu](channel-messenger-profile.md#setting-persistent-menu)
- [Greeting Text](channel-messenger-profile.md#setting-greeting-text)
- [Ice Breakers](channel-messenger-profile.md#setting-ice-breakers)
- [Domain Whitelist](channel-messenger-profile.md#setting-domain-whitelist)
- Account Linking

All of those settings can be put into `channels.messenger.profile` fields in `bottender.config.js`:

```js
// bottender.config.js
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
      profile: {
        // ...put your messenger profile setting here
      },
    },
  },
};
```

After setting environment variables correctly (if not, please check [this](channel-messenger-setup.md) out first), you may call the `messenger profile set` command to set the profile:

```sh
npx bottender messenger profile set
```

> **Note:** Calls to the Messenger Profile API are limited to **10 API calls per 10 minute** interval. This rate limit is enforced per Page. You could retry it a few minutes later if the rate limit exceeded.

To view all set messenger profile, you may use the `messenger profile get` command:

```sh
npx bottender messenger profile get
```

## Setting Get Started Button

A Page Messenger welcome screen can display a [Get Started button](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button). When this bu