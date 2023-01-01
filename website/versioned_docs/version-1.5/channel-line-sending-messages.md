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
async function SendHi(context) {
  await context.sendText('Hi!');
}
```

For more information, please refer to LINE's official doc, [Text Message](https://developers.line.biz/en/reference/messaging-api/#text-message).

### Text with LINE emoji

You can include LINE's original emoji (usually involves LINE Friends) in text messages using character code. You can find the list of LINE emoji in [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680894-82b89200-1cd4-11ea-92e8-53e222bbd12d.png"/></p>

```js
async function SendHi(context) {
  await context.sendText(`${String.fromCodePoint(0x100084)} Hi!`);
}
```

## Sending Rich Media Messages

**Rich Media Messages** of LINE consist of stickers, images, videos, audios, locations, and imagemaps. Rich Media Messages is useful when your priority is to catch the user's attention, e.g., limited promotion. Plus, it is also handy to create an immersive experience, e.g., telling a story.

### Sticker

By **Stickers**, LINE creates a versatile, communicative language. Stickers make your bot expressive and engaging. To send a sticker, you need to indicate the package ID and sticker ID of the sticker.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680788-38cfac00-1cd4-11ea-81a7-880abdf1ff45.png"/></p>

```js
await context.sendSticker({
  packageId: '1',
  stickerId: '1',
});
```

For more information, please refer to LINE's official doc, [Sticker Message](https://developers.line.biz/en/reference/messaging-api/#sticker-message).

> **Note:** You can only send LINE's original Stickers. You can find the sticker's package ID and sticker ID in the [sticker list](https://developers.line.biz/media/messaging-api/sticker_list.pdf).

### Image

To send an **Image**, you need to prepare URLs of the original image and a smaller preview image. Users can see the preview image in the chat. When the user clicked the preview image, s/he can see the original image.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680782-379e7f00-1cd4-11ea-8f41-bd18c194a55b.png"/></p>

If you want to set up a call to action on the image, you may refer to [Imagemaps](#imagemap).

```js
await context.sendImage({
  originalContentUrl: 'https://example.com/image.jpg',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

For more information, please refer to LINE's official doc, [Image Message](https://developers.line.biz/en/reference/messaging-api/#image-message).

> **Note:** The URLs must use HTTPS over TLS 1.2 or later.

### Video

To send a **Video**, you need to prepare the URL of the video file and the URL of a preview image. The user can play the video by tapping on the preview image.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680791-38cfac00-1cd4-11ea-8d1f-ea98199ae363.png"/></p>

```js
await context.sendVideo({
  originalContentUrl: 'https://example.com/video.mp4',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

For more information, please refer to LINE's official doc, [Video Message](https://developers.line.biz/en/reference/messaging-api/#video-message).

> **Note:** The URLs must use HTTPS over TLS 1.2 or later.

### Audio

To send an `Audio` file, you need to prepare the URL of the file and the duration of the audio.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680776-3705e880-1cd4-11ea-843b-782a95aaa30d.png"/></p>

```js
await context.sendAudio({
  originalContentUrl: 'https://example.com/audio.mp3',
  duration: 240000,
});
```

For more information, please refer to LINE's official doc, [Audio Message](https://developers.line.biz/en/reference/messaging-api/#audio-message).

> **Note:** The URLs must use HTTPS over TLS 1.2 or later.

### Location

To send your location information to users, you have to prepare a title, address, and latitude and longitude.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680786-38371580-1cd4-11ea-9755-e8f335183ebd.png"/></p>

```js
await context.sendLocation({
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

For more information, please refer to LINE's official doc, [Location Message](https://developers.line.biz/en/reference/messaging-api/#location-message).

### Imagemap

**Imagemap** offers very flexible and interactive usage. It is an image with multiple tappable areas. When a user taps one of these areas, the user can link to a webpage or send a message on their behalf.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680785-38371580-1cd4-11ea-98ce-c41438379fe8.png"/></p>

```js
const imagemap = {
  baseUrl: 'https://example.com/bot/images/rm001',
  baseSize: {
    height: 1040,
    width: 1040,
  },
  actions: [
    {
      type: 'uri',
      linkUri: 'https://example.com/',
      area: {
        x: 0,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
    {
      type: 'message',
      text: 'hello',
      area: {
        x: 520,
        y: 0,
        width: 520,
        height: 1040,
      },
    },
  ],
};
const altText = 'this is an imagemap';
await context.sendImagemap(altText, imagemap);
```

For more information, please refer to LINE's official doc, [Imagemap Message](https://developers.line.biz/en/reference/messaging-api/#imagemap-message).

## Sending Template Messages

**Template message** is interactive gallery composed of image, video, title, subtitle, and buttons.

Template message is the key to offer rich media interaction. It is usually used in the scenario of display multiple choices and next actions to the user, e.g., applying coupons, booking a room, making a reservation.

> **Note:**
> Compared with Template Message, we highly depend on [Flex Message](./channel-line-flex.md) once it is available. There are two main reasons:
>
> - Flex Message supports both desktop and mobile devices, while Template Message only supports mobile devices.
> - Flex Message is an HTML-like chat UI, which creates a better, engaging user experience.

```js
const template = {
  type: 'buttons',
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
      type: 'uri',
      label: 'View detail',
      uri: 'http://example.com/page/123',
    },
  ],
};
const altText = 'this is a template';
await context.sendTemplate(altText, template);
```

### Confirm Template

A **Confirm Template** is designed for confirmation.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680779-379e7f00-1cd4-11ea-9706-941b6a30e003.png"/></p>

```js
const template = {
  text: 'Are you sure?',
  actions: [
    {
      type: 'message',
      label: 'Yes',
      text: 'yes',
    },
    {
      type: 'message',
      label: 'No',
      text: 'no',
    },
  ],
};
const altText = 'this is a confirm template';
await context.sendConfirmTemplate(altText, template);
```

For more information, please refer to LINE's official doc, [Confirm Template](https://developers.line.biz/en/reference/messaging-api/#confirm).

### Buttons Template

A `Buttons Template` includes an image, title, text, and multiple action buttons.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680777-3705e880-1cd4-11ea-896d-c0f53257276c.png"/></p>

```js
const template = {
  thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
  title: 'Menu',
  text: 'Please select',
  actions: [
    {
      type: 'postback',
      label: 'Buy',
      data: 'action=buy&itemid=123',
    },
    {
      type: 'postback',
      label: 'Add to cart',
      data: 'action=add&itemid=123',
    },
    {
  