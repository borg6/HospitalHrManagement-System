---
id: channel-messenger-sending-messages
title: Sending Messenger Messages
original_id: channel-messenger-sending-messages
---

## Sending Text Messages

![39993793_311437072745802_2909561891720265728_n](https://user-images.githubusercontent.com/662387/69112041-4e2d2e00-0aba-11ea-8e44-02aaaf804b5d.png)

`Text message` is the most frequent and common message types among all chat channels. It also offers a minimal format while carrying out dynamic data, e.g., stock price and weather info.

```js
async function SendHi(context) {
  await context.sendText('Hi!');
}
```

## Sending Rich Media Messages

![ezgif-1-ef5b05e9923c](https://user-images.githubusercontent.com/662387/69852152-7be65400-12be-11ea-87d3-25837d74c91c.gif)

Rich media consist of images, videos, audios, and files.

Rich media is useful when your priority is to catch the user's attention, e.g., limited promotion. Plus, it is also handy to create an immersive experience, e.g., telling a story.

In the following section, you can see four different approaches while sending `Rich Media Messages`.

If you want to benefit from Facebook's cache, i.