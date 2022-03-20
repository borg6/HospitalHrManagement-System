---
id: api-line-context
title: LineContext
original_id: api-line-context
---

- [Reply API](#reply-api)
  - [Imagemap Message](#reply-imagemap-message)
  - [Template Messages](#reply-template-messages)
  - [Flex Messages](#reply-flex-messages)
- [Push API](#push-api)
  - [Imagemap Message](#push-imagemap-message)
  - [Template Messages](#push-template-messages)
  - [Flex Messages](#push-flex-messages)
- [Quick Replies](#quick-replies)
- [Profile API](#profile-api)
- [Group/Room Member Profile API](#grouproom-member-profile-api)
- [Group/Room Member IDs API](#grouproom-member-ids-api)
- [Leave API](#leave-api)
- [Rich Menu API](#rich-menu-api)
- [Account Link API](#account-link-api)

<a id="reply-api" />

### Reply API - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#send-reply-message)

Responds to events from users, groups, and rooms.

#### `reply(messages)`

Responds messages to the receiver using reply token.

| Param    | Type       | Description                                                             |
| -------- | ---------- | ----------------------------------------------------------------------- |
| messages | `Object[]` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
context.reply([
  {
    type: 'text',
    text: 'Hello!',
  },
]);
```

`replyToken` can only be used once, but you can send up to 5 messages using the same token.

```js
const { Line } = require('messaging-api-line');

context.reply([
  Line.createText('Hello'),
  Line.createImage({
    originalContentUrl: 'https://example.com/original.jpg',
    previewImageUrl: 'https://example.com/preview.jpg',
  }),
  Line.createText('End'),
]);
```

<br />

#### `replyText(text)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#text-message)

Responds text message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/text-bf530b30.png" width="250px" />

You can include LINE original emoji in text messages using character codes. For a list of LINE emoji that can be sent in LINE chats, see the [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/emoji-b3285d27.png" width="250px" />

| Param | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| text  | `String` | Text of the message 