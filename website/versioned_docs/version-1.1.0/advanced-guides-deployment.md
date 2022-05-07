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

First, [sign up](https://www.heroku.com/) a Heroku account if you haven't, then download and install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

> **Note:** For the full command list, please refer to Heroku's doc, [Heroku CLI Commands](https://devcenter.heroku.com/articles/heroku-cli).

### Step 2: Heroku Login & Create a Heroku App

Before going further, make sure you have login your Heroku account by:

```sh
heroku login
```

Then, you can create a Heroku app by the below command.

```sh
heroku create <your-heroku-app-name>
```

> **Note:** You may see some app name regulation if you don't meet it. For example: `Name must start with a letter, end with a letter or digit and can only contain lowercase letters, digits, and dashes`

Once you created your Heroku app successfully, you could see a deployment address for your app like `https://<your-heroku-app-name>.herokuapp.com/`. You can note it down for the coming webhook setting.

### Step 3: Fill in Environment Variables to Heroku

Config the environment variables of your Heroku app with the following commands: `heroku config:set -a <your-heroku-app-name> <ENV_KEY_01>=<ENV_VALUE_01>`.

For chat channels require multiple environment variables, you may use commands like `heroku config:set -a <your-heroku-app-name> <ENV_KEY_01>=<ENV_VALUE_01> <ENV_KEY_02>=<ENV_VALUE_02>`.

For example:

```sh
heroku config:set -a <your-heroku-app-name> MESSENGER_PAGE_ID=xxxxxx MESSENGER_ACCESS_TOKEN=xxxxxx MESSENGER_APP_ID=xxxxxx MESSENGER_APP_SECRET=xxxxxx MESSENGER_VERIFY_TOKEN=xxxxxx
```

### Step 4: Using Git in Your Bottender App

Deployment of Heroku depends on Git. Make sure you have run `git init` and make the first commit in your Bottender app.

For example:

```sh
git init
git add .
git commit -am "first commit"
```

### Step 5: Deploy Your Bot to Heroku and Set Up Webhook

When you try to set up the webhook, some chat channels (e.g., Messenger) might ask for an immediate bot server verification. So, we recommend you to set up the webhook after your Bottender app server running.

There are two basic types of webhook setup:

1. Set up webhook by Developer Console UI, e.g., Messenger, LINE, Slack
2. Set up webhook by CLI, e.g., Messenger, Telegram, Viber

#### Step 5a: Set Up Webhook by UI of Developer Console

Use Heroku CLI by Git push to complete the deployment.

```sh
heroku git:remote -a <yo