---
id: advanced-guides-deployment
title: Deployment
original_id: advanced-guides-deployment
---

 <p><img width="500" src="https://user-images.githubusercontent.com/662387/72043275-b7c3fe80-32eb-11ea-9a49-f2d5c073f397.jpg"/></p>

Once you finished your bot in development, the next step is to deploy your bot to a hosting service!

> **Note:** We aim to offer deployment guides for every popular modern hosting services. [Tweet us](https://twitter.com/bottenderjs) if you haven't seen your favorite one.

### Before Going Further

We assumed that you already built at least one basic Bottender app in development. If you haven't, you may check [Getting Started](./getting-started.md) to create your first Bottender app in a few minutes, then jump to the setup doc of your favorite chat channel:

- [Messenger Setup](https://bottender.js.org/docs/channel-messenger-setup)
- [LINE Setup](https://bottender.js.org/docs/channel-line-setup)
- [Slack Setup](https://bottender.js.org/docs/channel-slack-setup)
- [Telegram Setup](https://bottender.js.org/docs/channel-telegram-setup)
- [Viber Setup](https://bottender.js.org/docs/channel-viber-setup)

## Heroku

<p><img width="300" src="https://user-images.githubusercontent.com/662387/72130857-a8a98300-33b5-11ea-9ec6-10c8aac37230.jpg"/></p>

Heroku is one of the most popular hosting services. Not only the clear document, ease of scalability, using Git for deployment, but also the friendly [free pricing plan](https://www.heroku.com/pricing) for experiment purpose.

In the following, you can see the necessary steps of Heroku Deployment:

### Step 1: Create a Heroku Account & Download Heroku CLI

First, [sign up](https://www.heroku.com/) a Heroku account if you haven't, then download and install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#s