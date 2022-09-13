---
id: channel-messenger-handling-events
title: Handling Messenger Events
original_id: channel-messenger-handling-events
---

For a Messenger bot, the two most frequent Messenger events are `Text Event` and `Payload Event.`

- `Text Event` is triggered when a user inputs text.
- `Payload Event` can be triggered by postback buttons on all kinds of templates, buttons, persistent menu, or quick replies.

Apart from the above events, Messenger also supports advanced events for better user experience. For example, [`Media Related Events`](#media-related-events) offer a bunch of events when users send a piece of rich media to a bot, for instance, image, video, audio, and file. [Delivery/Read Event](#deliveryread-events) is handy while calculating how many users received a broadcast message. A humor response of [Sticker Event](#sticker-events), makes your bot more human-like.

## Enable Messenger Events

Due to Facebook's policy, you have to subscribe to the event types you need.
Hence, in the development of each bot, remember to enable Messenger events from [Facebook Developer Console](https://developers.facebook.com/apps/). Or, you can enable Messenger events by editing `bottender.config.js`.

For exampl