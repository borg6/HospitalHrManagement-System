---
id: channel-messenger-sending-messages
title: Sending Messenger Messages
original_id: channel-messenger-sending-messages
---

Messenger has become one of the most popular channels between businesses and customers. Most of the messenger bots are designed for 1:1 communication.

Although the document is about "sending messages," in most of the cases, Messenger bots send messages after it receives a user event.

> **Note:**
>
> - If you want to know better about when your bots can send message proactively, please refer to Messenger's guide link about [Messenger Platform Policy Overview](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview#standard_messaging).
> - We have a separate document to introduce user event handling, please refer to [Handling Messenger Events](./channel-messenger-handling-events.md).

If you are not familiar with Messenger messages, we would like to recommend a short happy path.

To begin with, please try the basis of communication, [`Text Messages`](#sending-text-messages). Secondly, try [`Generic Template Messages`](#sending-template-messages) to help you display a collection of items (e.g., recommended restaurants, songs, or books). Finally, - [`Quick Replies`](#sending-with-quick-reply), which continuously guides your users for the next possible actions.

If you have experienced with Messenger messages, don't miss [`Rich Media Messages`](#sending-rich-media-messages) to show the personality of your bots. [`Rich Media Messages`](#sending-rich-media-messages) and [`Media Template Messages`](#media-template) are necessary if you are building a media-driven, storytelling bot. Tak