---
id: channel-line-sending-messages
title: Sending LINE Messages
original_id: channel-line-sending-messages
---

LINE has become one of the most popular chat channels between businesses and customers in Asia, especially in Japan, Taiwan, and Thailand. LINE's 2019 strategy, "[Life on LINE](https://www.youtube.com/watch?v=vrkVmOlaLis)," depicts a user's daily life surrounded with LINE's service, e.g., LINE Login, LINE Pay, LINE Music, LINE Today, LINE Things, LINE Spot. The completeness of the LINE's ecosystem offers more dynamic, integrated, online to offline possibilities of LINE Bots.

LINE Bots can be invited into a group, or focus on 1:1 communication. LINE Bots for group chat benefit from organic growth. Once a bot joined a group, it gains more exposure.

#### Reply API & Push API

Due to cost concerns, one thing developers should clearly understand before sending any messages is the difference between `Reply API` and `Push API.`

![messaging-api-thumb0](https://user-images.githubusercontent.com/662387/70490029-4cdea680-1b38-11ea-9979-2f9a68cb02cd.png)

- `Push API` allows developers to send messages directly to users anytime. However, it is only free in development. In production, you may refer to [LINE Official Account Subscription Plans](https://www.linebiz.com/id-en/service/line-account-connect/) to check out the messaging fee of your official account.

- Using `Reply API` is free. But bots can only reply once to a user who interacted with your LINE official account. For each bot reply, you can send up to 5 `Message Objects` (See LINE's official document, "[Sending reply messages](https://developers.line.biz/en/docs/messaging-api/building-bot/#sending-reply-messages)"). If you attempt to reply more than 5 `Message Objects`, you will see an error in console.

> **Note:**
>
> - It's a bit tricky to count the number of `Message Objects.` For example, each function call of `Sending Message,` `Sending Text Message,` or `Sending Template Messages` is calculated as one `Message Object.`, while the final attached `Quick Reply` doesn't count as a `Message Object.`

## Sending Messages

Bottender aims to support every feature of each chat channel. In the code below, you can see the most primitive way to send any LINE messages by Bottender.

```js
await context.send([
  {
    type: 'text',
    text: 'hello',
  },
]);
```

Bottender also cares about "Developer Experience." In the following section, you can see a full set of syntactic sugar to make codes in Bottender much readable and expressive.

## Sending Text Messages

`Text message` is the most frequent and common message types among all chat channels. It also offers a minimal format while carrying out dynamic data, e.g., stock price and weather info.

 <p><img width="300" src="https://user-images.githubusercontent.com/662387/70680790-38cfac00-1cd4-11ea-88a3-12ed1c71effc.png"/></p>

### Plain Text

The following example shows how to reply with plain text.

```js
async function SendHi(context) {
  await context.sendText('Hi!');
}
```

> **Note:**
> For more info, please refer to LINE's official doc, [`Text Message`](https://developers.line.biz/en/reference/messaging-api/#text-message)

### Text with LINE emoji

You can include LINE's original emoji (usually involves LINE Friends) in text messages using character code. You can find the list of LINE emoji in [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680894-82b89200-1cd4-11ea-92e8-53e222bbd12d.png"/></p>

```js
async function SendHi(context) {
  await context.sendText(`${String.fromCodePoint(0x100084)} Hi!`);
}
```

## Sending Multiple Messages

Bottender collects all sending messages in a single request. You can see two different approaches below.

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

or

```js
await context.sendText('hello');
await context.sendText('world');
```

## Sending Rich Media Messages

`Rich Media Messages` of LINE consist of stickers, images, videos, audios, locations, and imagemaps. `Rich Media Messages` is useful when your priority is to catch the user's attention, e.g., limited promotion. Plus, it is also handy to create an immersive experience, e.g., telling a story.

### Sticker

By `Stickers,` LINE creates a versatile, communicative language. `Stickers` make your bot expressive and engaging. To send a sticker, you need to indicate the package ID and sticker ID of the sticker.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680788-38cfac00-1cd4-11ea-81a7-880abdf1ff45.png"/></p>

```js
await context.sendSticker({
  packageId: '1',
  stickerId: '1',
});
```

> **Note:**
>
> - You can only send LINE's original `Stickers.` You can find the sticker's package ID and sticker ID in the [sticker list](https://developers.line.biz/media/messaging-api/sticker_list.pdf).
> - For more info, please refer to LINE's official doc, [`Sticker Message`](https://developers.line.biz/en/reference/messaging-api/#sticker-message)

### Image

To send an `Image,` you need to prepare URLs of the original image and a smaller preview image. Users can see the preview image in the chat. When the user clicked the preview image, s/he can see the original image.

<p><img width="300" src="https://user-images.githubusercontent.com/662387/70680782-379e7f00-1cd4-11ea-8f41-bd18c194a55b.png"/></p>

If you want to set up a call to action on the image, you may refer to [Imagemaps](#imagemap).

```js
await context.sendImage({
  originalContentUrl: 'https://example.com/image.jpg',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

> **Note:**
>
> - The URLs must use HTTPS over TLS 1.2 or later.
> - For more info, please refer to LINE's official doc, [`Image Message`](https://developers.line.biz/en/reference/messaging-api/#image-message)

### Video

To send a `Video,` you need to prepare the URL of the video file and the URL of a preview