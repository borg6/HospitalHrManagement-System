---
id: channel-line-notify
title: LINE Notify
---

## What is LINE Notify

[LINE Notify](https://notify-bot.line.me) is a LINE service that lets you send notifications to the subscribed users. Once a user subscribed to your service on LINE Notify, the user will become friends with LINE Notify automatically and you can send messages to the user through LINE Notify without extra cost.

## How to Use LINE Notify in Bottender

If you want to have a clean project with LINE Notify, you could start from [this example](https://github.com/Yoctol/bottender/tree/master/examples/line-notify) to develop your project. You can follow the following four steps to create your project:

1. Download the code from [`line-notify` example](https://github.com/Yoctol/bottender/tree/master/examples/line-notify).
2. Run `yarn` or `npm install` command to install all dependencies.
3. Fill the `.env` file with the correct values.
4. Run `yarn dev` or `npm run dev` to start the dev server.

If you want to have the folder structure we recommend, you could start with [create-bottender-app](getting-started.md#create-a-new-bottender-app) command and migrate it by following the migration instructions below.

### Creating a LINE Notify Service

To create a new LINE Notify service, open this [link](https://notify-bot.line.me/my/services/new) and submit the form after you finish it.

![](https://user-images.githubusercontent.com/3382565/74317707-da4baa80-4db6-11ea-93b0-68b5e6f2c8a9.png)

The value of the callback URL should look like: `https://{your domain}.ngrok.io/notify/redirect`

Official API document：https://notify-bot.line.me/doc/en/

> **Note:** [ngrok](https://ngrok.com/) is a well-known service that provides public HTTPs URLs for your local server using the tunnel. It's handy when you develop your bot locally. You may want to use it when developing.

### Environment Variables Setting

If you are familiar with any official Bottender example, you may already know about how to use the `.env` file to manage your environment variables in your local project.

In this case, you need to add `LINE_NOTIFY_CLIENT_ID`, `