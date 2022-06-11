---
id: channel-slack-setup
title: Slack Setup
original_id: channel-slack-setup
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/7aISWF9_jO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Enable Slack Channel

### Create a New Slack Bottender App

`Create Bottender App` is the best way to start building a new application in Bottender.

To create a project, run:

```sh
npx create-bottender-app my-app
```

Make sure that you checked the `slack` option:

![](https://user-images.githubusercontent.com/3382565/67851225-f2b7f200-fb44-11e9-8c86-eee0cbd7cb0d.png)

After finishing the `Create Bottender App` process, `bottender.config.js`, a config file, will be generated automatically for further channel settings.

### Enable Slack Channel for Existing Apps

First, you need to have a `bottender.config.js` file that sets `channels.slack.enabled` as `true`:

```js
module.exports = {
  channels: {
    slack: {
      enabled: true,
      path: '/webhooks/slack',
      accessToken: process.env.SLACK_ACCESS_TOKEN,
      verificationToken: process.env.SLACK_VERIFICATION_TOKEN,
    },
  },
};
```

The default webhook path is `/webhooks/slack`, but you can set your webhook path by `path` field.

## Complete Slack Channel Settings

To make a Slack bot work, you have to set up t