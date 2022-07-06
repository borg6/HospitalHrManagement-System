---
id: channel-messenger-multi-page
title: Messenger Multi-Page Support
original_id: channel-messenger-multi-page
---

![](https://user-images.githubusercontent.com/662387/71957687-66533b00-3229-11ea-9914-7e5919dd9d61.png)

This doc outlines how to build a single Bottender app to serve multiple Facebook Pages. For example, you can create a single Bottender app of dental appointments for multiple clinics with individual clinic info.

In our case, we use Bottender to build our online chatbot builder, [Creator](https://yoctol.ai/creator/). Every user can use [Creator](https://yoctol.ai/creator/) to build his/her bots. Technically speaking, each user's outcome of Creator is `bot configs` followed by a predefined structure. Finally, we use a single Bottender app with different `bot configs` to provider various Messenger Bots for each Facebook Page.

The core concept that makes one Bottender app serves multiple Facebook Pages is `context`. It covers not only the user's message, Page Id, but also the Page token for bot response. For more info, you may check out Bottender's doc, [Handling Messenger Events](https://bottender.js.org/docs/channel-messenger-handling-events).

In the following sections, you can see three essential steps:

- Enable `mapPageToAccessToken` feature of Bottender
- Prepare `Facebook Page Access Token` for each Facebook Page
- Manage `Facebook Page Subscriptions Fields` your bot needs

> **Note:** If you can't wait to begin with an example code, please visit [Messenger Multi-pages Example](h