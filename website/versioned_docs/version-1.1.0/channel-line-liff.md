---
id: channel-line-liff
title: LINE Front-end Framework (LIFF)
---

**LINE Front-end Framework (LIFF)** is the webview solution in LINE Apps. LIFF provides three different sizes of embedded webviews. You may use those sizes to enrich your users' experience:

![different sizes of liff](https://user-images.githubusercontent.com/563929/73712876-6a01b100-4746-11ea-8f85-22b8026882d5.png)

Besides, LIFF gives you more chances to improve interactions between users and the chatbot. One of the common scenarios is submitting a form in LINE Bots.

### Features in LIFF

LIFF lets you access a lot of different APIs on your web pages. Before getting started, you may want to grab some basic knowledge from LINE official docs:

- [Getting user profile](https://developers.line.biz/en/reference/liff/#get-profile)
- [Sending messages to LINE](https://developers.line.biz/en/reference/liff/#send-messages)
- [Opening link in external browser](https://developers.line.biz/en/reference/liff/#open-window)
- [Scanning QR Code](https://developers.line.biz/en/reference/liff/#scan-code)
- [Connecting to Bluetooth devices](https://developers.line.biz/en/reference/liff/#bluetooth-request-device)
- Others features in [LIFF playground](https://playground-for-liff.linecorp.com/)

## LIFF V2

LIFF v2 introduces some new features to developers, e.g., scanning QR codes, allowing users to open LIFF pages on the Desktop version of the LINE app.

For catching up quickly, this is a minimal implementation - [Bottender example with LIFF v2](https://github.com/Yoctol/bottender/tree/master/examples/line-liff-v2).

The following sections are step by step tutorials about how to send messages with LIFF in a Bottender project created by [Create Bottender App](getting-started.md#create-a-new-bottender-app).

> **Note:** LIFF v1 is not recommended anymore. If you're using it, you should migrate to LIFF v2. However, you could still find an example for [LIFF v1 here](https://github.com/Yoctol/bottender/tree/master/examples/line-liff-v1).

## Workflow

For making your LIFF pages work, your typical workflow should look like this:

- Creating a LINE Login channel in [LINE Developers console](https://developers.line.biz/console/)
- Adding a LIFF app in the LINE Login channel
- Developing the LIFF page

### Creating LINE Login Channel

First of all, you need to open [LINE Developers Console](https://developers.line.biz/console/) to create a LINE Login channel.

For more details about creating a LINE Login channel, please checkout [Creating A Provider and Channel](https://developers.line.biz/en/docs/liff/getting-started/#creating-a-provider-and-channel).

### Adding LIFF in the LINE Login Channel

- Click the "LIFF" tab in the LINE Login Channel you just created.
- Click the "Add" button
- Fill in the "Endpoint URL" in this format: `https://{your domain}.ngrok.io/liff`
- Fill in other values

For more details about registering a LIF