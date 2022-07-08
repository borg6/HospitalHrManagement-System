
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

A Page Messenger welcome screen can display a [Get Started button](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button). When this button is tapped, the Messenger Platform will send a `messaging_postbacks` event to your webhook.

![](https://user-images.githubusercontent.com/3382565/68738725-058cf500-0622-11ea-9096-beb372d22f8e.png)

This can be set by using `channels.messenger.profile.getStarted` fields in `bottender.config.js`:

```js
// bottender.config.js
module.exports = {
  channels: {
    messenger: {
      // Omission here...
      profile: {
        getStarted: {
          payload: 'GET_STARTED',
        },
      },
    },
  },
};
```

## Setting Persistent Menu

The [persistent menu](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu) can be set for your bot to help people discover and more easily access your functionality throughout the conversation.

![](https://user-images.githubusercontent.com/3382565/68738777-22292d00-0622-11ea-833d-5e873cfd1f46.png)

This can be set by using `channels.messenger.profile.persistentMenu` fields in `bottender.config.js`:

```js
// bottender.config.js
module.exports = {
  channels: {
    messenger: {
      // Omission here...
      profile: {
        getStarted: {
          payload: 'GET_STARTED',
        },
        persistentMenu: [
          {
            locale: 'default',
            composerInputDisabled: false,
            callToActions: [
              {
                type: 'postback',
                title: 'Talk to an agent',
                payload: 'CARE_HELP',