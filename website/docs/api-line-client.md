---
id: api-line-client
title: LineClient
---

- [Usage](#usage)
- [Methods](#methods)
  - [Reply API](#reply-api)
    - [Imagemap Messages](#reply-imagemap-messages)
    - [Template Messages](#reply-template-messages)
    - [Flex Messages](#reply-flex-messages)
  - [Push API](#push-api)
    - [Imagemap Messages](#push-imagemap-messages)
    - [Template Messages](#push-template-messages)
    - [Flex Messages](#push-flex-messages)
  - [Multicast API](#multicast-api)
    - [Imagemap Messages](#multicast-imagemap-messages)
    - [Template Messages](#multicast-template-messages)
    - [Flex Messages](#multicast-flex-messages)
  - [Quick Replies](#quick-replies)
  - [Content API](#content-api)
  - [Profile API](#profile-api)
  - [Group/Room Member Profile API](#grouproom-member-profile-api)
  - [Group/Room Member IDs API](#grouproom-member-ids-api)
  - [Leave API](#leave-api)
  - [Rich Menu API](#rich-menu-api)
  - [Account Link API](#account-link-api)
  - [LINE Front-end Framework API](#liff-api)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `LineClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

// This `client` variable is a `LineClient` instance
const client = getClient('line');

await client.pushText(USER_ID, 'Hello!');
```

Or, get the `LineClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'line') {
    // `context.client` is a `LineClient` instance
    await context.client.pushText(USER_ID, 'Hello!');
  }
}
```

### Error Handling

`LineClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.replyText(token, text).catch((error) => {
  console.log(error); // the formatted error message
  console.log(error.stack); // stack trace of the error
  console.log(error.config); // axios request config
  console.log(error.request); // axios HTTP request
  console.log(error.response); // axios HTTP response
});
```

<br />

## Methods

All methods return a Promise.

<br />

<a id="reply-api" />

### Reply API - [Official Docs](https://developers.line.me/en/reference/messaging-api/#send-reply-message)

Responds to events from users, groups, and rooms.

#### `reply(token, messages)`

Responds messages using specified reply token.

| Param    | Type            | Description                                                             |
| -------- | --------------- | ----------------------------------------------------------------------- |
| token    | `String`        | `replyToken` received via webhook.                                      |
| messages | `Array<Object>` | Array of objects which contains the contents of the message to be sent. |

Example:

```js
client.reply(REPLY_TOKEN, [
  {
    type: 'text',
    text: 'Hello!',
  },
]);
```

`replyToken` can only be used once, but you can send up to 5 messages using the same token.

```js
const { Line } = require('messaging-api-line');

client.reply(REPLY_TOKEN, [
  Line.createText('Hello'),
  Line.createImage({
    originalContentUrl: 'https://example.com/original.jpg',
    previewImageUrl: 'https://example.com/preview.jpg',
  }),
  Line.createText('End'),
]);
```

There are a bunch of factory methods can be used to create messages:

- `Line.createText(text, options)`
- `Line.createImage(image, options)`
- `Line.createVideo(video, options)`
- `Line.createAudio(audio, options)`
- `Line.createLocation(location, options)`
- `Line.createSticker(sticker, options)`
- `Line.createImagemap(altText, imagemap, options)`
- `Line.createTemplate(altText, template, options)`
- `Line.createButtonTemplate(altText, buttonTemplate, options)`
- `Line.createConfirmTemplate(altText, confirmTemplate, options)`
- `Line.createCarouselTemplate(altText, columns, options)`
- `Line.createImageCarouselTemplate(altText, columns, options)`
- `Line.createFlex(altText, contents, options)`

<br />

#### `replyText(token, text, options)` - [Official Docs](https://developers.line.me/en/reference/messaging-api/#text-message)

Responds text message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82649893-77d33780-9c4c-11ea-9075-f11848d92850.png" width="250px" />

You can include LINE original emoji in text messages using character codes. For a list of LINE emoji that can be sent in LINE chats, see the [emoji list](https://developers.line.me/media/messaging-api/emoji-list.pdf).

<img src="https://user-images.githubusercontent.com/563929/82650108-cbde1c00-9c4c-11ea-8510-b2909bc93d8d.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| text                     | `String` | Text of the message to be sent.              |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyText(REPLY_TOKEN, 'Hello!');
```

<br />

#### `replyImage(token, image, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#image-message)

Responds image message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82650545-64749c00-9c4d-11ea-8038-0ac0dd817a02.png" width="250px" />
<img src="https://user-images.githubusercontent.com/563929/82650588-75251200-9c4d-11ea-955d-30ba9458ffd3.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| image.originalContentUrl | `String` | Image URL.                                   |
| image.previewImageUrl    | `String` | Preview image URL.                           |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyImage(REPLY_TOKEN, {
  originalContentUrl: 'https://example.com/original.jpg',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyVideo(token, video, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#video-message)

Responds video message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82650704-a69ddd80-9c4d-11ea-9e86-8e2c5294d97f.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| video.originalContentUrl | `String` | URL of video file.                           |
| video.previewImageUrl    | `String` | URL of preview image.                        |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyVideo(REPLY_TOKEN, {
  originalContentUrl: 'https://example.com/original.mp4',
  previewImageUrl: 'https://example.com/preview.jpg',
});
```

<br />

#### `replyAudio(token, audio, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#audio-message)

Responds audio message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82651012-26c44300-9c4e-11ea-8c25-aade44dbe4f8.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| audio.originalContentUrl | `String` | URL of audio file.                           |
| audio.duration           | `Number` | Length of audio file (milliseconds).         |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyAudio(REPLY_TOKEN, {
  originalContentUrl: 'https://example.com/original.m4a',
  duration: 240000,
});
```

<br />

#### `replyLocation(token, location, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#location-message)

Responds location message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82651104-478c9880-9c4e-11ea-8fdf-cb6d8a10bf9a.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| location                 | `Object` | Object contains location's parameters.       |
| location.title           | `String` | Title of the location.                       |
| location.address         | `String` | Address of the location.                     |
| location.latitude        | `Number` | Latitude of the location.                    |
| location.longitude       | `Number` | Longitude of the location.                   |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyLocation(REPLY_TOKEN, {
  title: 'my location',
  address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
  latitude: 35.65910807942215,
  longitude: 139.70372892916203,
});
```

<br />

#### `replySticker(token, sticker, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#sticker-message)

Responds sticker message using specified reply token.
<br />
For a list of stickers that can be sent with the Messaging API, see the [sticker list](https://developers.line.me/media/messaging-api/messages/sticker_list.pdf).

<img src="https://user-images.githubusercontent.com/563929/82651371-a7833f00-9c4e-11ea-9041-46dcb962b0c7.png" width="250px" />

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| sticker.packageId        | `String` | Package ID.                                  |
| sticker.stickerId        | `String` | Sticker ID.                                  |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replySticker(REPLY_TOKEN, { packageId: '1', stickerId: '1' });
```

<br />

### Reply Imagemap Messages

#### `replyImagemap(token, altText, imagemap, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#imagemap-message)

Responds imagemap message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82651489-cc77b200-9c4e-11ea-860a-2f7f1ecaa5b5.png" width="250px" />

| Param                               | Type            | Description                                                                                 |
| ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| token                               | `String`        | `replyToken` received via webhook.                                                          |
| altText                             | `String`        | Alternative text.                                                                           |
| imagemap                            | `Object`        | Object contains imagemap's parameters.                                                      |
| imagemap.baseUrl                    | `String`        | Base URL of image.                                                                          |
| imagemap.baseSize                   | `Object`        | Base size object.                                                                           |
| imagemap.baseSize.width             | `Number`        | Width of base image.                                                                        |
| imagemap.baseSize.height            | `Number`        | Height of base image.                                                                       |
| imagemap.video                      | `Object`        | Video object.                                                                               |
| imagemap.video.originalContentUrl   | `String`        | URL of the video file (Max: 1000 characters).                                               |
| imagemap.video.previewImageUrl      | `String`        | URL of the preview image (Max: 1000 characters).                                            |
| imagemap.video.area.x               | `Number`        | Horizontal position of the video area relative to the top-left corner of the imagemap area. |
| imagemap.video.area.y               | `Number`        | Vertical position of the video area relative to the top-left corner of the imagemap area.   |
| imagemap.video.area.width           | `Number`        | Width of the video area.                                                                    |
| imagemap.video.area.height          | `Number`        | Height of the video area.                                                                   |
| imagemap.video.externalLink.linkUri | `String`        | Webpage URL. Called when the label displayed after the video is tapped.                     |
| imagemap.video.externalLink.label   | `String`        | Label. Displayed after the video is finished.                                               |
| imagemap.actions                    | `Array<Object>` | Action when tapped.                                                                         |
| options                             | `Object`        | Optional options.                                                                           |
| options.quickReply                  | `Object`        | Quick reply object to attach to the message.                                                |
| options.quickReply.items            | `Array`         | Quick reply items.                                                                          |

Example:

```js
client.replyImagemap(REPLY_TOKEN, 'this is an imagemap', {
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

#### `replyTemplate(token, altText, template, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#template-messages)

Responds template message using specified reply token.

| Param                    | Type     | Description                                  |
| ------------------------ | -------- | -------------------------------------------- |
| token                    | `String` | `replyToken` received via webhook.           |
| altText                  | `String` | Alternative text.                            |
| template                 | `Object` | Object with the contents of the template.    |
| options                  | `Object` | Optional options.                            |
| options.quickReply       | `Object` | Quick reply object to attach to the message. |
| options.quickReply.items | `Array`  | Quick reply items.                           |

Example:

```js
client.replyTemplate(REPLY_TOKEN, 'this is a template', {
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

#### `replyButtonTemplate(token, altText, buttonTemplate, options)` - [Official Docs](https://developers.line.me/en/mreference/essaging-api/#buttons)

Alias: `replyButtonsTemplate`.

Responds button template message using specified reply token.

<img src="https://user-images.githubusercontent.com/563929/82651618-f6c96f80-9c4e-11ea-873c-90821a7f5510.png" width="250px" />

| Param                               | Type            | Description                                                                                   |
| ----------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| token                               | `String`        | `replyToken` received via webhook.                                                            |
| altText                             | `String`        | Alternative text.                                                                             |
| buttonTemplate                      | `Object`        | Object contains buttonTemplate's parameters.                                                  |
| buttonTemplate.thumbnailImageUrl    | `String`        | Image URL of buttonTemplate.                                                                  |
| buttonTemplate.imageAspectRatio     | `String`        | Aspect