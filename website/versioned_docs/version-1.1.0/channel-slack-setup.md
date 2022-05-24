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

To make a Slack bot work, you have to set up the following values:

- Slack Access Token
- Slack Verification Token
- Webhook

### Prequirements

Before going further, we assumed that you already have:

- a Slack Account
- a [Slack Workspace](https://slack.com/create#email)

#### Slack App & Bot User

Create a [Slack App](https://api.slack.com/apps?new_app=1) if you haven't.

 <p><img width="800" src="https://user-images.githubusercontent.com/662387/71443858-64c54580-2748-11ea-9d64-7fb321a176b0.png"/></p>
 <p><img width="800" src="https://user-images.githubusercontent.com/662387/71443859-655ddc00-2748-11ea-942d-22d4378b8a28.png"/></p>

Create a bot user within your Slack App.

<p><img width="800" src="https://user-images.githubusercontent.com/662387/71443860-655ddc00-2748-11ea-98ce-d54f96b2ea9f.png"/></p>

<p><img width="800" src="https://user-images.githubusercontent.com/662387/71443861-655ddc00-2748-11ea-805d-31326486c049.png"/></p>

Remember to install the Slack App in your workspace.

<p><img width="800" src="https://user-images.githubusercontent.com/662387/71443862-65f67280-2748-11ea-83a8-ca04340d6217.png"/></p>
<p><img width="800" src="https://user-images.githubusercontent.com/662387/71443863-65f67280-2748-11ea-8de7-2be1f0419729.png"/></p>

> **Note:**
>
> - If you are not familiar with how Slack bots work, you can find detailed instructions from Dialogflow's [Slack Integration Document](https://cloud.google.com/dialogflow/docs/integration