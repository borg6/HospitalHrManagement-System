---
id: channel-viber-sending-messages
title: Sending Viber Messages
original_id: channel-viber-sending-messages
---

## Sending Text Messages

Use this method to send text messages.

```js
async function SendHi(context) {
  await context.sendText('Hi!');
}
```

Which in turn will look like this:

![](https://user-images.githubusercontent.com/3382565/31481925-61e46008-aeeb-11e7-842f-79fee8066c6a.jpg)

For more information, please refer to Viber's official doc, [Text message](https://developers.viber.com/docs/api/rest-bot-api/#text-message).

## Sending Picture Messages

Use this method to send picture.

```js
await context.sendPicture({
  text: 'Photo description',
  media: 'http://www.images.com/img.jpg',
  thumbnail: 'http://www.images.com/thumb.jpg',
});
```

Wh