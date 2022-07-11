---
id: advanced-guides-multi-channel
title: Multi-Channel Support
original_id: advanced-guides-multi-channel
---

Bottender intends to meet enterprise project needs. So, Bottender supports multiple chat channels in the very early stage. For example, you can put the environment variables of each chat channel in one config file; you can use [platform specific routes](the-basics-routing#platform-specific-routes) to organize user events from various platforms.

Plus, Bottender aims to support the full features of each chat channel, e.g., Block Kit of Slack, rich menu of LINE, Handover Protocol of Messenger. And you don't have to learn extra generic chat UIs and worry about if these still apply to the latest chat UI of each chat channel.

The primary three steps to build a basic cross-platform bot are as follows:

1. Set up each chat channel
2. Enable each chat channel
3. Develop cross-platform bot actions

## Set Up Each Chat Channel

To build a cross-platform bot, you have to set up each platform first. In short, you have to fill i