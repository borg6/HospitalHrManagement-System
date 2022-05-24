---
id: channel-slack-sending-messages
title: Sending Slack Messages
original_id: channel-slack-sending-messages
---

Since Slack is a messaging channel specialized for team communication, Slack bots are usually expected to work either inside a channel or 1:1 chat.

Chatting in the channel makes collecting individual preferences efficiently. For example, we have a Slack bot to collect colleagues' afternoon tea orders.

Plus, Slack bot is especially good at notification scenarios, e.g., monitoring the health status of online service, or current stars of [Bottender GitHub repo](https://github.com/Yoctol/bottender)(Star it if you like it!). It is because Slack apps can post messages to channels, groups, or users without any extra fee.

While developing with Official Slack API, developers have to manage token, channel id, user id of each dialog. Bottender helps developers manage those parameters by `context.` Bot developers can always make a bot respond to its current context, no matter the context is `Public Channels,` `Private Channels,` `Private Groups,` or `Direct Messaging.`

> **Note:**
>
> - The idea of `Bot` connects to Slack's `APP.` It is important when you are cross-referencing Bottender doc with Slack's official doc.
> - Since Slack is one of the sophisticated chat channels, in this doc, we only cover the most frequent use of methods. To access the full list of Slack API support of Bottender, you may refer to [Bottender's API](https://bottender.js.org/docs/api-slack-context).
>   If you are interested in Slack's complete methods, you may refer to Slack's official document, "[API Methods.](https://api.slack.com/methods)". Don't miss the `Test` tab next to each method; it offers a handy way to try native Slack API better.

## Sending Text Messages

![Screen Shot 2019-12-02 at 6 38 26 PM](https://user-images.githubusercontent.com/662387/69952866-0f27bf80-1533-11ea-8cbc-41b68e2f733e.png)

`Text message` is the most frequent and common message types. It also offers a minimal medium carrying out dynamic data, e.g., stock price and weather info.

```js
async function SendHi(context) {
  await context.sendText('Hi!');
}
```

## Posting Messages

![Screen Shot 2019-12-06 at 2 52 03 PM](https://user-images.githubusercontent.com/662387/70302447-1b17c800-1838-11ea-8c9a-affe2820fb2f.png)

This method posts