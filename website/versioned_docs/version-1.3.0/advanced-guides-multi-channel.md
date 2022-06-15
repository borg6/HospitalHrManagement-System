---
id: advanced-guides-multi-channel
title: Multi-Channel Support
original_id: advanced-guides-multi-channel
---

Bottender intends to meet enterprise project needs. So, Bottender supports multiple chat channels in the very early stage. For example, you can put the environment variables of each chat channel in one config file; you can use [`Platform Specific Routes`](the-basics-routing#platform-specific-routes) to organize user events from various platforms.

Plus, Bottender aims to support the full features of each chat channel, e.g., `Block Kit` of Slack, `rich menu` of LINE, `Handover Protocol` of Messenger. That is why we didn't design cross-platform `Generic Chat UIs`. And you don't have to learn extra `Generic Chat UIs` and worry about if these still apply to the latest `Chat UI` of each chat channel.

The primary three steps to build a basic cross-platform bot are as follows:

1. Set up each chat channel
2. Enable each chat channel
3. Develop cross-platform bot actions

## Set Up Each Chat Channel

To build a cross-platform bot, you have to set up each platform first. In short, you have to fill in environment variables in your `.env` for the chat channels supported by your bot.

```
# .env

MESSENGER_PAGE_ID=
MESSENGER_ACCESS_TOKEN=
MESSENGER_APP_ID=
MESSENGER_APP_SECRET=
MESSENGER_VERIFY_TOKEN=

LINE_ACCESS_TOKEN=
LINE_CHANNEL_SECRET=

TELEGRAM_ACCESS_TOKEN=

SLACK_A