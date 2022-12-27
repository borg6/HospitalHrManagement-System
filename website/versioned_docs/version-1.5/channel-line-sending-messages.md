---
id: channel-line-sending-messages
title: Sending LINE Messages
original_id: channel-line-sending-messages
---

## Reply API and Push API

Due to cost concerns, you should clearly understand before sending any messages is the difference between Reply API and Push API:

![messaging-api-thumb0](https://user-images.githubusercontent.com/662387/70490029-4cdea680-1b38-11ea-9979-2f9a68cb02cd.png)

- **Reply API** is free. However, your bot can only reply to the user once after a user interacts with your LINE official account. For each bot reply, you can send up to 5 **message objects** (See LINE's official document, [Sending Reply Messages](https://developers.line.biz/en/reference/messaging-api/#send-reply-message)). If you attempt to reply with more than 5 message objects, you may see an error in your console.

- **Push API** allows developers to send messages directly to users anytime. However, it might cost some money depends on the pricing plan in your country.

By default, Bottender uses **Reply API** to send messages to users in conversations.

> **Note:** Reply API only works within 30 seconds from a user interacts with your LINE official account.

## Batching Messages

By default, Bottender runs in Batch Mode. Messages to reply are put into the queue and sent to LINE in a single request.

To send "hello" and "world" with two messages, you can use one of the following usage:

1. Call `context.sendText()` two times:

```js
await context.sendText('hello');
await context.sendText('world');
```

2. Call `send()` with two message objects:

```js
await context.send([
  {
    type: 'text',
    text: 'hello',
  },
  {
    type: 'text',
    text: 'world',
  },
]);
```

The above two examples are equivalent. However, we recommend using the first usage because of better compatibility with other platforms.

## Sending Text Messages

**Text message** is the most frequent and common message types among all chat channels. It also offers a minimal format while carrying out dynamic data, e.g., stock price and weather info.

 <p><img width="300" src="https://user-images.githubusercontent.com/662387/70680790-38cfac00-1cd4-11ea-88a3-12ed1c71effc.png"/></p>

### Plain Text

The following example shows how to reply with plain text.

```js
async fu