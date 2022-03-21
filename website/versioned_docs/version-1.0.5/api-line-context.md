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
| text  | `String` | Text of the message to be sent. |

Example:

```js
context.replyText('Hello!');
```

<br />

#### `replyImage(imageUrl, previewImageUrl)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#image-message)

Responds image message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/image-167efb33.png" width="250px" /><img src="https://developers.line.me/media/messaging-api/messages/image-full-04fbba55.png" width="250px" />

| Param           | Type     | Description        |
| --------------- | -------- | ------------------ |
| imageUrl        | `String` | Image URL.         |
| previewImageUrl | `String` | Preview image URL. |

Example:

```js
context.replyImage({
  originalContentUrl: 'https://example.com/original.jpg',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyVideo(videoUrl, previewImageUrl)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#video-message)

Responds video message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/video-a1bc08a4.png" width="250px" />

| Param           | Type     | Description           |
| --------------- | -------- | --------------------- |
| videoUrl        | `String` | URL of video file.    |
| previewImageUrl | `String` | URL of preview image. |

Example:

```js
context.replyVideo({
  originalContentUrl: 'https://example.com/original.mp4',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyAudio(audioUrl, duration)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#audio-message)

Responds audio message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/audio-6290d91b.png" width="250px" />

| Param    | Type     | Description           |
| -------- | -------- | --------------------- |
| audioUrl | `String` | URL of audio file.    |
| duration | `Number` | Length of audio file. |

Example:

```js
context.replyAudio({
  originalContentUrl: 'https://example.com/original.m4a',
  duration: 240000,
});
```

<br />

#### `replyLocation(location)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#location-message)

Responds location message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/location-8f9b6b79.png" width="250px" />

| Param              | Type     | Description                            |
| ------------------ | -------- | -------------------------------------- |
| location           | `Object` | Object contains location's parameters. |
| location.title     | `String` | Title of the location.                 |
| location.address   | `String` | Address of the location.               |
| location.latitude  | `Number` | Latitude of the location.              |
| location.longitude | `Number` | Longitude of the location.             |

Example:

```js
context.replyLocation({
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

<br />

#### `replySticker(packageId, stickerId)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#sticker-message)

Responds sticker message to the receiver using reply token.  
For a list of stickers that can be sent with the Messaging API, see the [sticker list](https://developers.line.me/media/messaging-api/messages/sticker_list.pdf).

<img src="https://developers.line.me/media/messaging-api/messages/sticker-cb1a6a3a.png" width="250px" />

| Param     | Type     | Description |
| --------- | -------- | ----------- |
| packageId | `String` | Package ID. |
| stickerId | `String` | Sticker ID. |

Example:

```js
context.replySticker({ packageId: '1', stickerId: '1' });
```

<br />

### Reply Imagemap Message

#### `replyImagemap(altText, imagemap)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#imagemap-message)

Responds imagemap message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/imagemap-dd854fa7.png" width="250px" />

| Param                    | Type       | Description                            |
| ------------------------ | ---------- | -------------------------------------- |
| altText                  | `String`   | Alternative text.                      |
| imagemap                 | `Object`   | Object contains imagemap's parameters. |
| imagemap.baseUrl         | `String`   | Base URL of image.                     |
| imagemap.baseSize        | `Object`   | Base size object.                      |
| imagemap.baseSize.width  | `Number`   | Width of base image.                   |
| imagemap.baseSize.height | `Number`   | Height of base image.                  |
| imagemap.actions         | `Object[]` | Action when tapped.                    |

Example:

```js
context.replyImagemap('this is an imagemap', {
  baseUrl: 'https://example.com/bot/images/rm001',
  baseSize: {
    width: 1040,
    height: 1040,
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
});
```

<br />

### Reply Template Messages

#### `replyTemplate(altText, template)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#template-messages)

Responds template message to the receiver using reply token.

| Param    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| altText  | `String` | Alternative text.                         |
| template | `Object` | Object with the contents of the template. |

Example:

```js
context.replyTemplate('this is a template', {
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
});
```

<br />

#### `replyButtonTemplate(altText, buttonTemplate)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#buttons)

Alias: `replyButtonsTemplate`.

Responds button template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/buttons-86e14165.png" width="250px" />

| Param                               | Type       | Description                                                                                   |
| ----------------------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| altText                             | `String`   | Alternative text.                                                                             |
| buttonTemplate                      | `Object`   | Object contains buttonTemplate's parameters.                                                  |
| buttonTemplate.thumbnailImageUrl    | `String`   | Image URL of buttonTemplate.                                                                  |
| buttonTemplate.imageAspectRatio     | `String`   | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square`         |
| buttonTemplate.imageSize            | `String`   | Size of the image. Specify one of the following values: `cover`, `contain`                    |
| buttonTemplate.imageBackgroundColor | `String`   | Background color of image. Specify a RGB color value. The default value is `#FFFFFF` (white). |
| buttonTemplate.title                | `String`   | Title of buttonTemplate.                                                                      |
| buttonTemplate.text                 | `String`   | Message text of buttonTemplate.                                                               |
| buttonTemplate.defaultAction        | `Object`   | Action when image is tapped; set for the entire image, title, and text area.                  |
| buttonTemplate.actions              | `Object[]` | Action when tapped.                                                                           |

Example:

```js
context.replyButtonTemplate('this is a template', {
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
});
```

<br />

#### `replyConfirmTemplate(altText, confirmTemplate)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#confirm)

Responds confirm template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/confirm-444aead5.png" width="250px" />

| Param                   | Type       | Description                                   |
| ----------------------- | ---------- | --------------------------------------------- |
| altText                 | `String`   | Alternative text.                             |
| confirmTemplate         | `Object`   | Object contains confirmTemplate's parameters. |
| confirmTemplate.text    | `String`   | Message text of confirmTemplate.              |
| confirmTemplate.actions | `Object[]` | Action when tapped.                           |

Example:

```js
context.replyConfirmTemplate('this is a confirm template', {
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
});
```

<br />

#### `replyCarouselTemplate(altText, carouselItems, options)` - [Official Docs](https://developers.line.me/en/docs/messaging-api/reference/#carousel)

Responds carousel template message to the receiver using reply token.

<img src="https://developers.line.me/media/messaging-api/messages/carousel-c59baef6.png" width="250px" />

| Param                    | Type       | Description                                                                           |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------- |
| altText                  | `String`   | Alternative text.                                                                     |
| carouselItems            | `Object[]` | Array of columns which contains object for carousel.                                  |
| options                  | `Object`   | Object contains options.                                                              |
| options.imageAspectRatio | `String`   | Aspect ratio of the image. Specify one of the following values: `rectangle`, `square` |
| options.imageSize        | `String`   | Size of the image. Specify one of the following values: `cover`, `contain`            |

Example:

```js
context.replyCarouselTemplate('this is a carousel template', [
  {
    thumbnailImageUrl: 'https://example.com/bot/images/item1.jpg',
    title: 'this is menu',
    text: 'description',
    actions: [
      {
        type: 'postback',
        label: 'Buy',
        data: 'action=buy&itemid=111',
      },
      {
        type: 'postback',
        label: 'Add to cart',
        data: 'action=add&itemid=111',
      },
      {
        type: 'uri',
   