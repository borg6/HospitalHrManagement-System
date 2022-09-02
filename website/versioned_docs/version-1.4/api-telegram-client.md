---
id: api-telegram-client
title: TelegramClient
original_id: api-telegram-client
---

- [Usage](#usage)
- [Methods](#methods)
  - [Webhook API](#webhook-api)
  - [Send API](#send-api)
  - [Get API](#get-api)
  - [Updating API](#updating-api)
  - [Group API](#group-api)
  - [Payments API](#payments-api)
  - [Inline Mode API](#inline-mode-api)
  - [Game API](#game-api)
  - [Others](#others)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `TelegramClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('telegram');

// `client` is a `TelegramClient` instance
const webhookInfo = await client.getWebhookInfo();
```

Or, get the `TelegramClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'telegram') {
    // `context.client` is a `TelegramClient` instance
    const webhookInfo = await context.client.getWebhookInfo();
  }
}
```

### Error Handling

`TelegramClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `console.log` with the error instance returns the formatted message. If you'd like to get the axios `request`, `response`, or `config`, you can still get them via those keys on the error instance.

```js
client.getWebhookInfo().catch((error) => {
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

#### `getWebhookInfo` - [Official Docs](https://core.telegram.org/bots/api#getwebhookinfo)

Gets current webhook status.

Example:

```js
client.getWebhookInfo().then((info) => {
  console.log(info);
  // {
  //   url: 'https://4a16faff.ngrok.io/',
  //   hasCustomCertificate: false,
  //   pendingUpdateCount: 0,
  //   maxConnections: 40,
  // }
});
```

<br />

#### `getUpdates` - [Official Docs](https://core.telegram.org/bots/api#getupdates)

Use this method to receive incoming updates using long polling. An Array of [Update](https://core.telegram.org/bots/api#update) objects is returned.

| Param   | Type     | Description          |
| ------- | -------- | -------------------- |
| options | `Object` | Optional parameters. |

Example:

```js
client
  .getUpdates({
    limit: 10,
  })
  .then((updates) => {
    console.log(updates);
    /*
      [
        {
          updateId: 513400512,
          message: {
            messageId: 3,
            from: {
              id: 313534466,
              firstName: 'first',
              lastName: 'last',
              username: 'username',
            },
            chat: {
              id: 313534466,
              firstName: 'first',
              lastName: 'last',
              username: 'username',
              type: 'private',
            },
            date: 1499402829,
            text: 'hi',
          },
        },
        ...
      ]
    */
  });
```

<br />

#### `setWebhook(url)` - [Official Docs](https://core.telegram.org/bots/api#setwebhook)

Specifies a url and receive incoming updates via an outgoing webhook.

| Param | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| url   | `String` | HTTPS url to send updates to. |

Example:

```js
client.setWebhook('https://4a16faff.ngrok.io/');
```

<br />

#### `deleteWebhook` - [Official Docs](https://core.telegram.org/bots/api#deletewebhook)

Removes webhook integration.

Example:

```js
client.deleteWebhook();
```

<br />

<a id="send-api" />

### Send API - [Official Docs](https://core.telegram.org/bots/api#available-methods)

#### `sendMessage(chatId, text [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendmessage)

Sends text messages.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| text    | `String`                          | Text of the message to be sent.                                          |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendMessage(CHAT_ID, 'hi', {
  disableWebPagePreview: true,
  disableNotification: true,
});
```

<br />

#### `sendPhoto(chatId, photo [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendphoto)

Sends photos.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| photo   | `String`                          | Pass a file id (recommended) or HTTP URL to send photo.                  |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendPhoto(CHAT_ID, 'https://example.com/image.png', {
  caption: 'gooooooodPhoto',
  disableNotification: true,
});
```

<br />

#### `sendAudio(chatId, audio [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendaudio)

Sends audio files.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| audio   | `String`                          | Pass a file id (recommended) or HTTP URL to send audio.                  |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendAudio(CHAT_ID, 'https://example.com/audio.mp3', {
  caption: 'gooooooodAudio',
  disableNotification: true,
});
```

<br />

#### `sendDocument(chatId, document [, options])` - [Official Docs](https://core.telegram.org/bots/api/#senddocument)

Sends general files.

| Param    | Type                              | Description                                                              |
| -------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId   | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| document | `String`                          | Pass a file id (recommended) or HTTP URL to send document.               |
| options  | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendDocument(CHAT_ID, 'https://example.com/doc.gif', {
  caption: 'gooooooodDocument',
  disableNotification: true,
});
```

<br />

#### `sendSticker(chatId, sticker [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendsticker)

Sends `.webp` stickers.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| sticker | `String`                          | Pass a file id (recommended) or HTTP URL to send sticker.                |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendSticker(CHAT_ID, 'CAADAgADQAADyIsGAAE7MpzFPFQX5QI', {
  disableNotification: true,
});
```

<br />

#### `sendVideo(chatId, video [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvideo)

Sends video files, Telegram clients support `mp4` videos (other formats may be sent as Document).

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| video   | `String`                          | Pass a file id (recommended) or HTTP URL to send video.                  |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendVideo(CHAT_ID, 'https://example.com/video.mp4', {
  caption: 'gooooooodVideo',
  disableNotification: true,
});
```

<br />

#### `sendVoice(chatId, voice [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvoice)

Sends audio files.

| Param   | Type                              | Description                                                              |
| ------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId  | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| voice   | `String`                          | Pass a file id (recommended) or HTTP URL to send voice.                  |
| options | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendVoice(CHAT_ID, 'https://example.com/voice.ogg', {
  caption: 'gooooooodVoice',
  disableNotification: true,
});
```

<br />

#### `sendVideoNote(chatId, videoNote [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvideonote)

Sends video messages. As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long.

| Param     | Type                              | Description                                                              |
| --------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId    | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| videoNote | `String`                          | Pass a file id (recommended) or HTTP URL to send video note.             |
| options   | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendVideoNote(CHAT_ID, 'https://example.com/video_note.mp4', {
  duration: 40,
  disableNotification: true,
});
```

<br />

#### `sendMediaGroup(chatId, media [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendmediagroup)

send a group of photos or videos as an album.

| Param   | Type                                                                                  | Description                                                                              |
| ------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| chatId  | <code>Number &#124; String</code>                                                     | Unique identifier for the target chat or username of the target channel.                 |
| media   | <code>Array&lt;[InputMedia](https://core.telegram.org/bots/api#inputmedia)&gt;</code> | A JSON-serialized array describing photos and videos to be sent, must include 2–10 items |
| options | `Object`                                                                              | Other optional parameters.                                                               |

Example:

```js
client.sendMediaGroup(CHAT_ID, [
  { type: 'photo', media: 'BQADBAADApYAAgcZZAfj2-xeidueWwI' },
]);
```

<br />

#### `sendLocation(chatId, location [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendlocation)

Sends point on the map.

| Param              | Type                              | Description                                                              |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId             | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| location           | `Object`                          | Object contains latitude and longitude.                                  |
| location.latitude  | `Number`                          | Latitude of the location.                                                |
| location.longitude | `Number`                          | Longitude of the location.                                               |
| options            | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendLocation(
  CHAT_ID,
  {
    latitude: 30,
    longitude: 45,
  },
  {
    disableNotification: true,
  }
);
```

<br />

#### `sendVenue(chatId, venue [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendvenue)

Sends information about a venue.

| Param           | Type                              | Description                                                              |
| --------------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId          | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| venue           | `Object`                          | Object contains information of the venue.                                |
| venue.latitude  | `Number`                          | Latitude of the venue.                                                   |
| venue.longitude | `Number`                          | Longitude of the venue.                                                  |
| venue.title     | `String`                          | Name of the venue.                                                       |
| venue.address   | `String`                          | Address of the venue.                                                    |
| options         | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendVenue(
  CHAT_ID,
  {
    latitude: 30,
    longitude: 45,
    title: 'a_title',
    address: 'an_address',
  },
  {
    disableNotification: true,
  }
);
```

<br />

#### `sendContact(chatId, contact [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendcontact)

Sends phone contacts.

| Param               | Type                              | Description                                                              |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId              | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| contact             | `Object`                          | Object contains information of the contact.                              |
| contact.phoneNumber | `String`                          | Phone number of the contact.                                             |
| contact.firstName   | `String`                          | First name of the contact.                                               |
| options             | `Object`                          | Other optional parameters.                                               |

Example:

```js
client.sendContact(
  CHAT_ID,
  {
    phoneNumber: '886123456789',
    firstName: 'first',
  },
  { lastName: 'last' }
);
```

<br />

#### `sendChatAction(chatId, action)` - [Official Docs](https://core.telegram.org/bots/api/#sendchataction)

Tells the user that something is happening on the bot's side.

| Param  | Type                              | Description                                                              |
| ------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| action | `String`                          | Type of action to broadcast.                                             |

Example:

```js
client.sendChatAction(CHAT_ID, 'typing');
```

<br />

### Get API

#### `getMe` - [Official Docs](https://core.telegram.org/bots/api/#getme)

Gets bot's information.

Example:

```js
client.getMe().then((result) => {
  console.log(result);
  // {
  //   id: 313534466,
  //   firstName: 'first',
  //   username: 'a_bot'
  // }
});
```

<br />

#### `getUserProfilePhotos(userId [, options])` - [Official Docs](https://core.telegram.org/bots/api/#getuserprofilephotos)

Gets a list of profile pictures for a user.

| Param   | Type     | Description                           |
| ------- | -------- | ------------------------------------- |
| userId  | `String` | Unique identifier of the target user. |
| options | `Object` | Other optional parameters             |

Example:

```js
client.getUserProfilePhotos(USER_ID, { limit: 1 }).then((result) => {
  console.log(result);
  // {
  //   totalCount: 3,
  //   photos: [
  //     [
  //       {
  //         fileId:
  //           'AgADBAADGTo4Gz8cZAeR-ouu4XBx78EeqRkABHahi76pN-aO0UoDA050',
  //         fileSize: 14650,
  //         width: 160,
  //         height: 160,
  //       },
  //       {
  //         fileId:
  //           'AgADBAADGTo4Gz8cZAeR-ouu4XBx78EeqRkABKCfooqTgFUX0EoD5B1C',
  //         fileSize: 39019,
  //         width: 320,
  //         height: 320,
  //       },
  //       {
  //         fileId:
  //           'AgADBAADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pC9K3UpI0koD1B1C',
  //         fileSize: 132470,
  //         width: 640,
  //         height: 640,
  //       },
  //     ],
  //   ],
  // }
});
```

<br />

#### `getFile(fileId)` - [Official Docs](https://core.telegram.org/bots/api/#getfile)

Gets basic info about a file and prepare it for downloading.

| Param  | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| fileId | `String` | File identifier to get info about. |

Example:

```js
client
  .getFile('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2')
  .then((file) => {
    console.log(file);
    // {
    //   fileId: 'UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2',
    //   fileSize: 106356,
    //   filePath: 'photos/1068230105874016297.jpg',
    // }
  });
```

<br />

#### `getFileLink(fileId)`

Gets link of the file.

| Param  | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| fileId | `String` | File identifier to get info about. |

Example:

```js
client
  .getFileLink('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2')
  .then((link) => {
    console.log(link);
    // 'https://api.telegram.org/file/bot<ACCESS_TOKEN>/photos/1068230105874016297.jpg'
  });
```

<br />

#### `getChat(chatId)` - [Official Docs](https://core.telegram.org/bots/api/#getchat)

Gets up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.)

| Param  | Type                              | Description                                                              |
| ------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |

Example:

```js
client.getChat(CHAT_ID).then((chat) => {
  console.log(chat);
  // {
  //   id: 313534466,
  //   firstName: 'first',
  //   lastName: 'last',
  //   username: 'username',
  //   type: 'private',
  // }
});
```

<br />

#### `getChatAdministrators(chatId)` - [Official Docs](https://core.telegram.org/bots/api/#getchatadministrators)

Gets a list of administrators in a chat.

| Param  | Type                              | Description                                                              |
| ------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |

Example:

```js
client.getChatAdministrators(CHAT_ID).then((admins) => {
  console.log(admins);
  // [
  //   {
  //     user: {
  //       id: 313534466,
  //       firstName: 'first',
  //       lastName: 'last',
  //       username: 'username',
  //       languangeCode: 'zh-TW',
  //     },
  //     status: 'creator',
  //   },
  // ]
});
```

<br />

#### `getChatMembersCount(chatId)` - [Official Docs](https://core.telegram.org/bots/api/#getchatmemberscount)

Gets the number of members in a chat.

| Param  | Type                              | Description                                                              |
| ------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |

Example:

```js
client.getChatMembersCount(CHAT_ID).then((count) => {
  console.log(count); // '6'
});
```

<br />

#### `getChatMember(chatId, userId)` - [Official Docs](https://core.telegram.org/bots/api/#getchatmember)

Gets information about a member of a chat.

| Param  | Type                              | Description                                                              |
| ------ | --------------------------------- | ------------------------------------------------------------------------ |
| chatId | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| userId | `Number`                          | Unique identifier of the target user.                                    |

Example:

```js
client.getChatMember(CHAT_ID, USER_ID).then((member) => {
  console.log(member);
  // {
  //   user: {
  //     id: 313534466,
  //     firstName: 'first',
  //     lastName: 'last',
  //     username: 'username',
  //     languangeCode: 'zh-TW',
  //   },
  //   status: 'creator',
  // }
});
```

<br />

### Updating API

#### `editMessageText(text [, options])` - [Official Docs](https://core.telegram.org/bots/api/#editmessagetext)

Edits text and game messages sent by the bot or via the bot (for inline bots).

| Param                   | Type                              | Description                                                              |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| text                    | `String`                          | New text of the message.                                                 |
| options                 | `Object`                          | One of `chatId`, `messageId` or `inlineMessageId` is required.           |
| options.chatId          | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| options.messageId       | `Number`                          | Identifier of the sent message.                                          |
| options.inlineMessageId | `String`                          | Identifier of the inline message.                                        |

Example:

```js
client.editMessageText('new_text', { messageId: MESSAGE_ID });
```

<br />

#### `editMessageCaption(caption [, options])` - [Official Docs](https://core.telegram.org/bots/api/#editmessagecaption)

Edits captions of messages sent by the bot or via the bot (for inline bots).

| Param                   | Type                              | Description                                                              |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| caption                 | `String`                          | New caption of the message.                                              |
| options                 | `Object`                          | One of `chatId`, `messageId` or `inlineMessageId` is required.           |
| options.chatId          | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| options.messageId       | `Number`                          | Identifier of the sent message.                                          |
| options.inlineMessageId | `String`                          | Identifier of the inline message.                                        |

Example:

```js
client.editMessageCaption('new_caption', { messageId: MESSAGE_ID });
```

<br />

#### `editMessageReplyMarkup(replyMarkup [, options])` - [Official Docs](https://core.telegram.org/bots/api/#editmessagereplymarkup)

Edits only the reply markup of messages sent by the bot or via the bot (for inline bots).

| Param                   | Type                              | Description                                                              |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| replyMarkup             | `Object`                          | New replyMarkup of the message.                                          |
| options                 | `Object`                          | One of `chatId`, `messageId` or `inlineMessageId` is required.           |
| options.chatId          | <code>Number &#124; String</code> | Unique identifier for the target chat or username of the target channel. |
| options.messageId       | `Number`                          | Identifier of the sent message.                                          |
| options.inlineMessageId | `String`                          | Identifier of the inline message.                                        |

Example:

```js
client.editMessageReplyMarkup(
  {
    keyboard: [[{ text: 'new_button_1' }, { text: 'new_button_2' }]],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
  },
  { messageId: MESSAGE_ID }
);
```

<br />

#### `deleteMessage(chatId, messageId)` - [Official Docs](https://core.telegram.org/bots/api/#deletemessage)

Deletes a message, including service messages.

| Param     | Type                              | Description                                                              |
| --------- | --------------------------------- | ------------------------------------------------------------------------ |
| chatId    | <code>Number &#124; String</code> | U