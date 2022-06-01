
---
id: api-viber-client
title: ViberClient
---

- [Usage](#usage)
- [Methods](#methods)
  - [Webhook API](#webhook-api)
  - [Send API](#send-api)
  - [Keyboards](#keyboards)
  - [Broadcast API](#broadcast-api)
  - [Get Account Info](#get-account-info)
  - [Get User Details](#get-user-details)
  - [Get Online](#get-online)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `ViberClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('viber');

// `client` is a `ViberClient` instance
const accountInfo = await context.client.getAccountInfo();
```

Or, get the `ViberClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'viber') {
    // `context.client` is a `ViberClient` instance
    const accountInfo = await context.client.getAccountInfo();
  }
}
```

### Error Handling

`ViberClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.setWebhook(url).catch((error) => {
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

### Webhook API

#### `setWebhook(url [, eventTypes])`

Setting a Webhook.

| Param      | Type            | Description                                                                                                                                                                                          |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url        | `String`        | HTTPS Account webhook URL to receive callbacks & messages from users.                                                                                                                                |
| eventTypes | `Array<String>` | Indicates the types of Viber events that the account owner would like to be notified about. Possible values: `delivered`, `seen`, `failed`, `subscribed`, `unsubscribed` and `conversation_started`. |

Example:

```js
client.setWebhook('https://4a16faff.ngrok.io/');
```

You can filter event types using optional parameter:

```js
client.setWebhook('https://4a16faff.ngrok.io/', [
  'delivered',
  'seen',
  'conversation_started',
]);
```

<br />

#### `removeWebhook`

Removing your webhook.

Example:

```js
client.removeWebhook();
```

<br />

### Send API

#### `sendMessage(receiver, message)` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#send-message)

Sending a message to a user.

| Param    | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| receiver | `String` | Unique Viber user id.           |
| message  | `Object` | Message and options to be sent. |

Example:

```js
client.sendMessage(USER_ID, {
  type: 'text',
  text: 'Hello',
});
```

> Note: Maximum total JSON size of the request is 30kb.

<br />

#### `sendText(receiver, text [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#text-message)

Sending a text message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481925-61e46008-aeeb-11e7-842f-79fee8066c6a.jpg" width="300" />

| Param    | Type     | Description                |
| -------- | -------- | -------------------------- |
| receiver | `String` | Unique Viber user id.      |
| text     | `String` | The text of the message.   |
| options  | `Object` | Other optional parameters. |

Example:

```js
client.sendText(USER_ID, 'Hello');
```

<br />

#### `sendPicture(receiver, picture [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#picture-message)

Sending a picture message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481916-5ec6cdac-aeeb-11e7-878b-6c8c4211a760.jpg" width="300" />

| Param             | Type     | Description                                                                                                                                                       |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| receiver          | `String` | Unique Viber user id.                                                                                                                                             |
| picture           | `Object` |
| picture.text      | `String` | Description of the photo. Can be an empty string if irrelevant. Max 120 characters.                                                                               |
| picture.media     | `String` | URL of the image (JPEG). Max size 1 MB. Only JPEG format is supported. Other image formats as well as animated GIFs can be sent as URL messages or file messages. |
| picture.thumbnail | `String` | URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported.                                                         |
| options           | `Object` | Other optional parameters.                                                                                                                                        |

Example:

```js
client.sendPicture(USER_ID, {
  text: 'Photo description',
  media: 'http://www.images.com/img.jpg',
  thumbnail: 'http://www.images.com/thumb.jpg',
});
```

<br />

#### `sendVideo(receiver, video [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#video-message)

Sending a video message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481918-5fa12074-aeeb-11e7-8287-830197d93b5b.jpg" width="300" />

| Param           | Type     | Description                                                                                               |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| receiver        | `String` | Unique Viber user id.                                                                                     |
| video           | `Object` |
| video.media     | `String` | URL of the video (MP4, H264). Max size 50 MB. Only MP4 and H264 are supported.                            |
| video.size      | `Number` | Size of the video in bytes.                                                                               |
| video.duration  | `Number` | Video duration in seconds; will be displayed to the receiver. Max 180 seconds.                            |
| video.thumbnail | `String` | URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported. |
| options         | `Object` | Other optional parameters.                                                                                |

Example:

```js
client.sendVideo(USER_ID, {
  media: 'http://www.images.com/video.mp4',
  size: 10000,
  thumbnail: 'http://www.images.com/thumb.jpg',
  duration: 10,
});
```

<br />

#### `sendFile(receiver, file [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#file-message)

Sending a file message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481919-600f437e-aeeb-11e7-9f13-7269a055cb86.jpg" width="300" />

| Param         | Type     | Description                                                                                                                                                         |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| receiver      | `String` | Unique Viber user id.                                                                                                                                               |
| file          | `Object` |
| file.media    | `String` | URL of the file. Max size 50 MB. See [forbidden file formats](https://developers.viber.com/docs/api/rest-bot-api/#forbiddenFileFormats) for unsupported file types. |
| file.size     | `Number` | Size of the file in bytes.                                                                                                                                          |
| file.fileName | `String` | Name of the file. File name should include extension. Max 256 characters (including file extension).                                                                |
| options       | `Object` | Other optional parameters.                                                                                                                                          |

Example:

```js
client.sendFile(USER_ID, {
  media: 'http://www.images.com/file.doc',
  size: 10000,
  fileName: 'name_of_file.doc',
});
```

<br />

#### `sendContact(receiver, contact [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#contact-message)

Sending a contact message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481924-615ce8b2-aeeb-11e7-8425-2d3bfa115fc1.jpg" width="300" />

| Param               | Type     | Description                                     |
| ------------------- | -------- | ----------------------------------------------- |
| receiver            | `String` | Unique Viber user id.                           |
| contact             | `Object` |
| contact.name        | `String` | Name of the contact. Max 28 characters.         |
| contact.phoneNumber | `String` | Phone number of the contact. Max 18 characters. |
| options             | `Object` | Other optional parameters.                      |

Example:

```js
client.sendContact(USER_ID, {
  name: 'Itamar',
  phoneNumber: '+972511123123',
});
```

<br />

#### `sendLocation(receiver, location [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#location-message)

Sending a location message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481923-61199a9e-aeeb-11e7-8a25-e3813eceb25b.jpg" width="300" />

| Param        | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| receiver     | `String` | Unique Viber user id.                  |
| location     | `Object` |
| location.lat | `String` | Latitude (±90°) within valid ranges.   |
| location.lon | `String` | Longitude (±180°) within valid ranges. |
| options      | `Object` | Other optional parameters.             |

Example:

```js
client.sendLocation(USER_ID, {
  lat: '37.7898',
  lon: '-122.3942',
});
```

<br />

#### `sendURL(receiver, url [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#url-message)

Sending an URL message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481921-6069f346-aeeb-11e7-97bf-83a17da0bc7a.jpg" width="300" />

| Param    | Type     | Description                |
| -------- | -------- | -------------------------- |
| receiver | `String` | Unique Viber user id.      |
| url      | `String` | URL. Max 2,000 characters. |
| options  | `Object` | Other optional parameters. |

Example:

```js
client.sendURL(USER_ID, 'http://developers.viber.com');
```

<br />

#### `sendSticker(receiver, stickerId [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#sticker-message)

Sending a sticker message to a user.

<img src="https://user-images.githubusercontent.com/3382565/31481922-60c2c444-aeeb-11e7-8fc9-bce2e5d06c42.jpg" width="300" />

| Param     | Type     | Description                                                                                                          |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| receiver  | `String` | Unique Viber user id.                                                                                                |
| stickerId | `Number` | Unique Viber sticker ID. For examples visit the [sticker IDs](https://viber.github.io/docs/tools/sticker-ids/) page. |
| options   | `Object` | Other optional parameters.                                                                                           |

Example:

```js
client.sendSticker(USER_ID, 46105);
```

<br />
