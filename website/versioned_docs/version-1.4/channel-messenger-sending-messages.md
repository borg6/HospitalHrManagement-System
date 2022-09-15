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

If you want to benefit from Facebook's cache, i.e., much faster loader time, then you should jump to section [Attaching Saved Assets](#attaching-saved-assets).

### Approach 1: Send by URL

Sending by URL might be the easiest way in terms of implementation. We recommend you to use this approach only for prototyping; the loading speed is probably driving your clients or customers crazy.

```js
await context.sendImage('https://example.com/image.jpg');
await context.sendVideo('https://example.com/video.mp4');
await context.sendAudio('https://example.com/audio.mp3');
await context.sendFile('https://example.com/receipt.pdf');
```

### Approach 2: Attaching Saved Assets

If you want to benefit from Facebook's cache, i.e., a much pleasant loading speed, you should try this a bit complicated approach.

First, you need to get a page-scoped `Attachment Id` by [Attachment Upload API](https://developers.facebook.com/docs/messenger-platform/send-messages/saving-assets#attachment_upload_api).

Once you get your `Attachment Id`, you can send rich media messages with the following code.

```js
await context.sendImage({ attachmentId: '<ATTACHMENT_ID>' });
await context.sendVideo({ attachmentId: '<ATTACHMENT_ID>' });
await context.sendAudio({ attachmentId: '<ATTACHMENT_ID>' });
await context.sendFile({ attachmentId: '<ATTACHMENT_ID>' });
```

> **Note:** > `Attachment Id` is page-scoped.

> A commercial bot project usually involves a staging Page for development and a production Page for production. In this case, before bot release, you have to re-upload all the attachments and update all the `Attachment Id`.

### Approach 3: Attaching ReadStreams

In the following example, you can send rich media by creating a readable stream. The file path is relative to your bot location.

```js
const fs = require('fs');

await context.sendImage(fs.createReadStream('image.jpg'));
await context.sendVideo(fs.createReadStream('video.mp4'));
await context.sendAudio(fs.createReadStream('audio.mp3'));
await context.sendFile(fs.createReadStream('receipt.pdf'));
```

### Approach 4: Attaching Buffers

In the following example, you can send rich media by creating a buffer. The file path is relative to your bot location.

```js
await context.sendImage(imageBuffer, { filename: 'image.jpg' });
await context.sendVideo(videoBuffer, { filename: 'video.mp4' });
await context.sendAudio(audioBuffer, { filename: 'audio.mp3' });
await context.sendFile(fileBuffer, { filename: 'receipt.pdf' });
```

## Sending Template Messages

![66391040_700974230346439_7580226164833124352_n](https://user-images.githubusercontent.com/662387/69858895-f79bcd00-12cd-11ea-999d-2f6c97e83f51.png)

![66362686_447994139365537_8885089546354556928_n](https://user-images.githubusercontent.com/662387/69858886-f5397300-12cd-11ea-888a-c93ec4ca7288.png)

In short, `Template message` is an interactive gallery composed of image, video, title, subtitle, and buttons.

`Template message` is the key to offer rich media interaction. It usually used in the scenario of display multiple choices and next actions to the user, e.g., applying coupon, booking a room, making a reservation.

> **Note:** If you are familiar with LINE and Messenger, you can find the difference Chat UI approach. While LINE creates an HTML-like, super flexible chat UI, [`Flex Messages`](./channel-line-flex.md), Messenger tends to focus on common chat UI patterns to offer a consistent user experience.

### Generic Template

![22880422_1740199342956641_1916832982102966272_n (1)](https://user-images.githubusercontent.com/662387/69859663-89f0a080-12cf-11ea-82d4-114745d4724d.png)

In a `Generic Template`, you can create up to 10 items in a row. Each item is composed of a title, subtitle, image, and up to 3 buttons.

> **Note:** Please refer to Messenger's official guide of [`Generic Template`](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) to find out the latest specification.

```js
await context.sendGenericTemplate([
  {
    title: 