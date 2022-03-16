---
id: api-vibercontext
title: ViberContext
original_id: api-vibercontext
---

- [Send API](#send-api)
- [Keyboards](#keyboards)
- [Get User Details](#get-user-details)
- [Get Online](#get-online)

### Send API

#### `sendMessage(message)` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#send-message)

Sending a message to the user.

| Param   | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| message | `Object` | Message and options to be sent. |

Example:

```js
context.sendMessage({
  type: 'text',
  text: 'Hello',
});
```

> **Note:** Maximum total JSON size of the request is 30kb.

<br />

#### `sendText(text [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#text-message)

Sending a text message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481925-61e46008-aeeb-11e7-842f-79fee8066c6a.jpg" width="300" />

| Param   | Type     | Description                |
| ------- | -------- | -------------------------- |
| text    | `String` | The text of the message.   |
| options | `Object` | Other optional parameters. |

Example:

```js
context.sendText('Hello');
```

<br />

#### `sendPicture(picture [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#picture-message)

Sending a picture message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481916-5ec6cdac-aeeb-11e7-878b-6c8c4211a760.jpg" width="300" />

| Param             | Type     | Description                                                                                                                                                       |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| picture           | `Object` |
| picture.text      | `String` | Description of the photo. Can be an empty string if irrelevant. Max 120 characters.                                                                               |
| picture.media     | `String` | URL of the image (JPEG). Max size 1 MB. Only JPEG format is supported. Other image formats as well as animated GIFs can be sent as URL messages or file messages. |
| picture.thumbnail | `String` | URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported.                                                         |
| options           | `Object` | Other optional parameters.                                                                                                                                        |

Example:

```js
context.sendPicture({
  text: 'Photo description',
  media: 'http://www.images.com/img.jpg',
  thumbnail: 'http://www.images.com/thumb.jpg',
});
```

<br />

#### `sendVideo(video [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#video-message)

Sending a video message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481918-5fa12074-aeeb-11e7-8287-830197d93b5b.jpg" width="300" />

| Param           | Type     | Description                                                                                               |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| video           | `Object` |
| video.media     | `String` | URL of the video (MP4, H264). Max size 50 MB. Only MP4 and H264 are supported.                            |
| video.size      | `Number` | Size of the video in bytes.                                                                               |
| video.duration  | `Number` | Video duration in seconds; will be displayed to the receiver. Max 180 seconds.                            |
| video.thumbnail | `String` | URL of a reduced size image (JPEG). Max size 100 kb. Recommended: 400x400. Only JPEG format is supported. |
| options         | `Object` | Other optional parameters.                                                                                |

Example:

```js
context.sendVideo({
  media: 'http://www.images.com/video.mp4',
  size: 10000,
  thumbnail: 'http://www.images.com/thumb.jpg',
  duration: 10,
});
```

<br />

#### `sendFile(file [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#file-message)

Sending a file message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481919-600f437e-aeeb-11e7-9f13-7269a055cb86.jpg" width="300" />

| Param          | Type     | Description                                                                                                                                                         |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| file           | `Object` |
| file.media     | `String` | URL of the file. Max size 50 MB. See [forbidden file formats](https://developers.viber.com/docs/api/rest-bot-api/#forbiddenFileFormats) for unsupported file types. |
| file.size      | `Number` | Size of the file in bytes.                                                                                                                                          |
| file.file_name | `String` | Name of the file. File name should include extension. Max 256 characters (including file extension).                                                                |
| options        | `Object` | Other optional parameters.                                                                                                                                          |

Example:

```js
context.sendFile({
  media: 'http://www.images.com/file.doc',
  size: 10000,
  file_name: 'name_of_file.doc',
});
```

<br />

#### `sendContact(contact [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#contact-message)

Sending a contact message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481924-615ce8b2-aeeb-11e7-8425-2d3bfa115fc1.jpg" width="300" />

| Param                | Type     | Description                                     |
| -------------------- | -------- | ----------------------------------------------- |
| contact              | `Object` |
| contact.name         | `String` | Name of the contact. Max 28 characters.         |
| contact.phone_number | `String` | Phone number of the contact. Max 18 characters. |
| options              | `Object` | Other optional parameters.                      |

Example:

```js
context.sendContact({
  name: 'Itamar',
  phone_number: '+972511123123',
});
```

<br />

#### `sendLocation(location [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#location-message)

Sending a location message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481923-61199a9e-aeeb-11e7-8a25-e3813eceb25b.jpg" width="300" />

| Param        | Type     | Description                            |
| ------------ | -------- | -------------------------------------- |
| location     | `Object` |
| location.lat | `String` | Latitude (±90°) within valid ranges.   |
| location.lon | `String` | Longitude (±180°) within valid ranges. |
| options      | `Object` | Other optional parameters.             |

Example:

```js
context.sendLocation({
  lat: '37.7898',
  lon: '-122.3942',
});
```

<br />

#### `sendURL(url [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#url-message)

Sending an URL message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481921-6069f346-aeeb-11e7-97bf-83a17da0bc7a.jpg" width="300" />

| Param   | Type     | Description                |
| ------- | -------- | -------------------------- |
| url     | `String` | URL. Max 2,000 characters. |
| options | `Object` | Other optional parameters. |

Example:

```js
context.sendURL('http://developers.viber.com');
```

<br />

#### `sendSticker(stickerId [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#sticker-message)

Sending a sticker message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481922-60c2c444-aeeb-11e7-8fc9-bce2e5d06c42.jpg" width="300" />

| Param     | Type     | Description                                                                                                          |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| stickerId | `Number` | Unique Viber sticker ID. For examples visit the [sticker IDs](https://viber.github.io/docs/tools/sticker-ids/) page. |
| options   | `Object` | Other optional parameters.                                                                                           |

Example:

```js
context.sendSticker(46105);
```

<br />

#### `sendCarouselContent(richMedia [, options])` - [Official Docs](https://developers.viber.com/docs/api/rest-bot-api/#carousel-content-message)

Sending a carousel content message to the user.

<img src="https://user-images.githubusercontent.com/3382565/31481917-5f1b43b4-aeeb-11e7-8557-e25951d69b53.jpg" width="300" />

| Param                         | Type            | Description                                                                              |
| ----------------------------- | --------------- | ---------------------------------------------------------------------------------------- |
| richMedia.ButtonsGroupColumns | `Number`        | Number of columns per carousel content block. Default 6 columns. Possible values: 1 - 6. |
| richMedia.ButtonsGroupRows    | `Number`        | Number of rows per carousel content block. Default 7 rows. Possible values: 1 - 7.       |
| richMedia.Buttons             | `Array<Object>` | Array of buttons. Max of 6 _ ButtonsGroupColumns _ ButtonsGroupRows.                     |
| options                       | `Object`        | Other optional parameters.                                                               |

Example:

```js
context.sendCarouselContent({
  Type: 'rich_media',
  ButtonsGroupColumns: 6,
  ButtonsGroupRows: 7,
  BgColor: '#FFFFFF',
  Buttons: [
    {
      Columns: 6,
      Rows: 3,
      ActionType: 'open-url',
      ActionBody: 'https://www.google.com',
      Image: 'http://html-test:8080/myweb/guy/assets/imageRMsmall2.png',
    },
    {
      Columns: 6,
      Rows: 2,
      Text: '<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br/>Sound Intone </font><font color=#6fc133>$17.99</font>',
      ActionType: 'open-url',
      ActionBody: 'https://www.google.com',
      TextSize: 'medium',
      TextVAlign: 'middle',
      TextHAlign: 'left',
    },
    {
      Columns: 6,
      Rows: 1,
      ActionType: 'reply',
      ActionBody: 'https://www.google.com',
      Text: '<font color=#ffffff>Buy</font>',
      TextSize: 'large',
      TextVAlign: 'middle',
      TextHAlign: 'middle',
      Image: 'https://s14.postimg.org/4mmt4rw1t/Button.png',
    },
    {
      Columns: 6,
      Rows: 1,
      ActionType: 'reply',
      ActionBody: 'https://www.google.com',
      Text: '<font color=#8367db>MORE DETAILS</font>',
      TextSize: 'small',
      TextVAlign: 'm