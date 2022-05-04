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

In short, `Template message` is an interactive gallery composed of image, video, title, subtitle, and buttons.

`Template message` is the key to offer rich media interaction. It usually used in the scenario of display multiple choices and next actions to the user, e.g., applying coupon, booking a room, making a reservation.

> **Note:**
>
> - If you are familiar with LINE and Messenger, you can find the difference Chat UI approach. While LINE creates an HTML-like, super flexible chat UI, [`Flex Messages`](./channel-line-flex.md), Messenger tends to focus on common chat UI patterns to offer a consistent user experience.

### Generic Template

![22880422_1740199342956641_1916832982102966272_n (1)](https://user-images.githubusercontent.com/662387/69859663-89f0a080-12cf-11ea-82d4-114745d4724d.png)

In a `Generic Template`, you can create up to 10 items in a row. Each item is composed of a title, subtitle, image, and up to 3 buttons.

> **Note:**
> Please refer to Messenger's official guide of [`Generic Template`](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic) to find out the latest specification.

```js
await context.sendGenericTemplate([
  {
    title: "Welcome to Peter's Hats",
    imageUrl: 'https://petersfancybrownhats.com/company_image.png',
    subtitle: "We've got the right hat for everyone.",
    defaultAction: {
      type: 'web_url',
      url: 'https://peterssendreceiveapp.ngrok.io/view?item=103',
      messengerExtensions: true,
      webviewHeightRatio: 'tall',
      fallbackUrl: 'https://peterssendreceiveapp.ngrok.io/',
    },
    buttons: [
      {
        type: 'postback',
        title: 'Start Chatting',
        payload: 'DEVELOPER_DEFINED_PAYLOAD',
      },
    ],
  },
]);
```

### Button Template

![23204276_131607050888932_1057585862134464512_n (1)](https://user-images.githubusercontent.com/662387/69862063-9dead100-12d4-11ea-88ea-f2aef56b59c8.png)

`Button Template` is similar to `Generic Template`; the only difference is the removal of the item image.

> **Note:**
> Please refer to Messenger's official guide of [`Button Template`](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button) to find out the latest specification.

```js
await context.sendButtonTemplate('What do you want to do next?', [
  {
    type: 'web_url',
    url: 'https://petersapparel.parseapp.com',
    title: 'Show Website',
  },
  {
    type: 'postback',
    title: 'Start Chatting',
    payload: 'USER_DEFINED_PAYLOAD',
  },
]);
```

### Receipt Template

![23208289_889588377870772_7170760265053503488_n](https://user-images.githubusercontent.com/662387/69862400-4862f400-12d5-11ea-8786-2e7fa03e8408.png)

`Receipt Template` is a template designed for order confirmation.

> **Note:**
> Please refer to Messenger's official guide of [`Receipt Template`](https://developers.facebook.com/docs/messenger-platform/send-messages/template/receipt) to find out the latest specification.

```js
await context.sendReceiptTemplate({
  recipientName: 'Stephane Crozatier',
  orderNumber: '12345678902',
  currency: 'USD',
  paymentMethod: 'Visa 2345',
  orderUrl: 'http://petersapparel.parseapp.com/order?order_id=123456',
  timestamp: '1428444852',
  elements: [
    {
      title: 'Classic White T-Shirt',
      subtitle: '100% Soft and Luxurious Cotton',
      quantity: 2,
      price: 50,
      currency: 'USD',
      imageUrl: 'http://petersapparel.parseapp.com/img/whiteshirt.png',
    },
    {
      title: 'Classic Gray T-Shirt',
      subtitle: '100% Soft and Luxurious Cotton',
      quantity: 1,
      price: 25,
      currency: 'USD',
      imageUrl: 'http://petersapparel.parseapp.com/img/grayshirt.png',
    },
  ],
  address: {
    street1: '1 Hacker Way',
    street2: '',
    city: 'Menlo Park',
    postalCode: '94025',
    state: 'CA',
    country: 'US',
  },
  summary: {
    subtotal: 75.0,
    shippingCost: 4.95,
    totalTax: 6.19,
    totalCost: 56.14,
  },
  adjustments: [
    {
      name: 'New Customer Discount',
      amount: 20,
    },
    {
      name: '$10 Off Coupon',
      amount: