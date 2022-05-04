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

If you have experienced with Messenger messages, don't miss [`Rich Media Messages`](#sending-rich-media-messages) to show the personality of your bots. [`Rich Media Messages`](#sending-rich-media-messages) and [`Media Template Messages`](#media-template) are necessary if you are building a media-driven, storytelling bot. Take a look at [`Persona`](#sending-with-persona), if you offer bot auto-reply and human agent customer support at the same time. Finally, if you are making a chatbot for campaign purposes, please dive into [`Rate Limits`](#rate-limits) to ensure your bot is ready for high traffic.

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

Firstly, you need to get a page-scoped `Attachment Id` by [Attachment Upload API](https://developers.facebook.com/docs/messenger-platform/send-messages/saving-assets#attachment_upload_api).

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

In short, `Template message` is an interactive gallery composed of im