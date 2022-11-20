---
id: api-messenger-context
title: MessengerContext
original_id: api-messenger-context
---

- [Message Content Types](#message-content-types)
- [Templates](#templates)
- [Quick Replies](#quick-replies)
- [Sender Actions](#sender-actions)
- [Targeting Broadcast Messages](#targeting-broadcast-messages)
- [User Profile API](#user-profile-api)
- [Handover Protocol API](#handover-protocol-api)

#### `sendMessage(message [, options])`

Send messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type     | Description                                                                                                                                                                                                                       |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message | `Object` | [message](https://developers.facebook.com/docs/messenger-platform/reference/send-api#message) object.                                                                                                                             |
| options | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendMessage({
  text: 'Hello!',
});
```

You can specify [messaging type](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) using options. If `messagingType` and `tag` is not provided, `UPDATE` will be used as default messaging type.

Example:

```js
context.sendMessage(
  {
    text: 'Hello!',
  },
  {
    messagingType: 'RESPONSE',
  }
);
```

Available messaging types:

- `UPDATE` as default
- `RESPONSE` using `{ messagingType: 'RESPONSE' }` options
- `MESSAGE_TAG` using `{ tag: 'ANY_TAG' }` options

<br />

<a id="message-content-types" />

### Message Content Types - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-messages#content_types)

#### `sendText(text [, options])`

Send plain text messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type     | Description                                                                                                                                                                                                                       |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| text    | `String` | Text of the message to be sent.                                                                                                                                                                                                   |
| options | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendText('Hello!');
```

With `CONFIRMED_EVENT_UPDATE` tag:

```js
context.sendText('Hello!', { tag: 'CONFIRMED_EVENT_UPDATE' });
```

<br />

#### `sendAttachment(attachment [, options])`

Send attachment messages to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param      | Type     | Description                                                                                                                                                                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attachment | `Object` | [attachment](https://developers.facebook.com/docs/messenger-platform/reference/send-api#attachment) object.                                                                                                                       |
| options    | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendAttachment({
  type: 'image',
  payload: {
    url: 'https://example.com/pic.png',
  },
});
```

<br />

#### `sendAudio(audio [, options])`

Send sounds to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| audio   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The audio to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send audio using URL string:

```js
context.sendAudio('https://example.com/audio.mp3');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendAudio({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendAudio(fs.createReadStream('audio.mp3'));
```

<br />

#### `sendImage(image [, options])`

Send images to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request). Supported formats are jpg, png and gif.

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| image   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The image to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send image using URL string:

```js
context.sendImage('https://example.com/vr.jpg');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendImage({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendImage(fs.createReadStream('vr.jpg'));
```

<br />

#### `sendVideo(video [, options])`

Send videos to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| video   | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The video to be sent.                                                                                                                             |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send video using URL string:

```js
context.sendVideo('https://example.com/video.mp4');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendVideo({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendVideo(fs.createReadStream('video.mp4'));
```

<br />

#### `sendFile(file [, options])`

Send files to the user by uploading them or sharing a URL using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param   | Type                                                                         | Description                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| file    | <code>String &#124; Buffer &#124; ReadStream &#124; AttachmentPayload</code> | The file to be sent.                                                                                                                              |
| options | `Object`                                                                     | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

- Send file using URL string:

```js
context.sendFile('https://example.com/receipt.pdf');
```

- Use `AttachmentPayload` to send cached attachment:

```js
context.sendFile({ attachmentId: '55688' });
```

- Use `ReadStream` created from local file:

```js
const fs = require('fs');

context.sendFile(fs.createReadStream('receipt.pdf'));
```

<br />

<a id="templates" />

### Templates - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/templates)

#### `sendTemplate(template [, options])`

Send structured message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

| Param    | Type     | Description                                                                                                                                                                                                                       |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| template | `Object` | Object of the template.                                                                                                                                                                                                           |
| options  | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) or [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendTemplate({
  templateType: 'button',
  text: 'title',
  buttons: [
    {
      type: 'postback',
      title: 'Start Chatting',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ],
});
```

<br />

#### `sendButtonTemplate(title, buttons [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template)

Send button message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410664-0b80b080-27dc-11e8-8854-4408d6f32fdf.png" alt="sendButtonTemplate" width="250" />

| Param   | Type       | Description                                                                                                                                                         |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title   | `String`   | Text that appears above the buttons.                                                                                                                                |
| buttons | `Object[]` | Array of [button](https://developers.facebook.com/docs/messenger-platform/send-messages/template/button#button). Set of 1-3 buttons that appear as call-to-actions. |
| options | `Object`   | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types).                   |

Example:

```js
context.sendButtonTemplate('What do you want to do next?', [
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

<br />

#### `sendGenericTemplate(elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template)

Send generic message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410502-bf948426-27db-11e8-8c9d-7fd6158d0cc2.png" alt="sendGenericTemplate" width="750" />

| Param    | Type       | Description                                                                                                                                                                                                                                       |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| elements | `Object[]` | Array of [element](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic#element). Data for each bubble in message.                                                                                              |
| options  | `Object`   | Other optional parameters, such as `imageAspectRatio`, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types) and [tags](https://developers.facebook.com/docs/messenger-platform/message-tags). |

Example:

```js
context.sendGenericTemplate(
  [
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
  ],
  { imageAspectRatio: 'square' }
);
```

Adding a [tag](https://developers.facebook.com/docs/messenger-platform/message-tags) to a message allows you to send it outside the 24+1 window, for a limited number of use cases, per [Messenger Platform policy](https://developers.facebook.com/docs/messenger-platform/policy-overview).

Example:

```js
context.sendGenericTemplate(
  [
    {
      // ...
    },
  ],
  { tag: 'CONFIRMED_EVENT_UPDATE' }
);
```

Available tags:

- `CONFIRMED_EVENT_UPDATE`
- `POST_PURCHASE_UPDATE`
- `ACCOUNT_UPDATE`
- `HUMAN_AGENT`

<br />

#### `sendMediaTemplate(elements [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-messages/template/media)

Send media message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410836-64249ada-27dc-11e8-8dc4-5a155916961a.png" alt="sendMediaTemplate" width="250" />

| Param    | Type       | Description                                                                                                                                       |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| elements | `Object[]` | Array of [element](https://developers.facebook.com/docs/messenger-platform/reference/template/media#payload). Only one element is allowed.        |
| options  | `Object`   | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

```js
context.sendMediaTemplate([
  {
    mediaType: 'image',
    attachmentId: '1854626884821032',
    buttons: [
      {
        type: 'web_url',
        url: 'https://en.wikipedia.org/wiki/Rickrolling',
        title: 'View Website',
      },
    ],
  },
]);
```

<br />

#### `sendReceiptTemplate(receipt [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/receipt-template)

Send receipt message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410909-8b72001e-27dc-11e8-94ae-555cb4ae93c9.png" alt="sendReceiptTemplate" width="250" />

| Param   | Type     | Description                                                                                                                                       |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| receipt | `Object` | [payload](https://developers.facebook.com/docs/messenger-platform/send-messages/template/receipt#payload) of receipt template.                    |
| options | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

```js
context.sendReceiptTemplate({
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
      amount: 10,
    },
  ],
});
```

<br />

#### `sendAirlineBoardingPassTemplate(attributes [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/airline-boardingpass-template)

Send airline boarding pass message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37410966-a5fb1542-27dc-11e8-9d23-e3a090b0cdeb.png" alt="sendAirlineBoardingPassTemplate" width="600" />

| Param      | Type     | Description                                                                                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes | `Object` | [payload](https://developers.facebook.com/docs/messenger-platform/send-messages/template/airline-boarding-pass#payload) of boarding pass template. |
| options    | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types).  |

Example:

```js
context.sendAirlineBoardingPassTemplate({
  introMessage: 'You are checked in.',
  locale: 'en_US',
  boardingPass: [
    {
      passengerName: 'SMITH/NICOLAS',
      pnrNumber: 'CG4X7U',
      travelClass: 'business',
      seat: '74J',
      auxiliaryFields: [
        {
          label: 'Terminal',
          value: 'T1',
        },
        {
          label: 'Departure',
          value: '30OCT 19:05',
        },
      ],
      secondaryFields: [
        {
          label: 'Boarding',
          value: '18:30',
        },
        {
          label: 'Gate',
          value: 'D57',
        },
        {
          label: 'Seat',
          value: '74J',
        },
        {
          label: 'Sec.Nr.',
          value: '003',
        },
      ],
      logoImageUrl: 'https://www.example.com/en/logo.png',
      headerImageUrl: 'https://www.example.com/en/fb/header.png',
      qrCode: 'M1SMITH/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh',
      aboveBarCodeImageUrl: 'https://www.example.com/en/PLAT.png',
      flightInfo: {
        flightNumber: 'KL0642',
        departureAirport: {
          airportCode: 'JFK',
          city: 'New York',
          terminal: 'T1',
          gate: 'D57',
        },
        arrivalAirport: {
          airportCode: 'AMS',
          city: 'Amsterdam',
        },
        flightSchedule: {
          departureTime: '2016-01-02T19:05',
          arrivalTime: '2016-01-05T17:30',
        },
      },
    },
    {
      passengerName: 'JONES/FARBOUND',
      pnrNumber: 'CG4X7U',
      travelClass: 'business',
      seat: '74K',
      auxiliaryFields: [
        {
          label: 'Terminal',
          value: 'T1',
        },
        {
          label: 'Departure',
          value: '30OCT 19:05',
        },
      ],
      secondaryFields: [
        {
          label: 'Boarding',
          value: '18:30',
        },
        {
          label: 'Gate',
          value: 'D57',
        },
        {
          label: 'Seat',
          value: '74K',
        },
        {
          label: 'Sec.Nr.',
          value: '004',
        },
      ],
      logoImageUrl: 'https://www.example.com/en/logo.png',
      headerImageUrl: 'https://www.example.com/en/fb/header.png',
      qrCode: 'M1JONES/FARBOUND  CG4X7U nawouehgawgnapwi3jfa0wfh',
      aboveBarCodeImageUrl: 'https://www.example.com/en/PLAT.png',
      flightInfo: {
        flightNumber: 'KL0642',
        departureAirport: {
          airportCode: 'JFK',
          city: 'New York',
          terminal: 'T1',
          gate: 'D57',
        },
        arrivalAirport: {
          airportCode: 'AMS',
          city: 'Amsterdam',
        },
        flightSchedule: {
          departureTime: '2016-01-02T19:05',
          arrivalTime: '2016-01-05T17:30',
        },
      },
    },
  ],
});
```

<br />

#### `sendAirlineCheckinTemplate(attributes [, options])` - [Official Docs](https://developers.facebook.com/docs/messenger-platform/send-api-reference/airline-checkin-template)

Send airline checkin message templates to the user using the [Send API](https://developers.facebook.com/docs/messenger-platform/reference/send-api#request).

<img src="https://user-images.githubusercontent.com/3382565/37411010-bfb3d8a2-27dc-11e8-91de-30653cf2d62c.png" alt="sendAirlineCheckinTemplate" width="250" />

| Param      | Type     | Description                                                                                                                                       |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributes | `Object` | [payload](https://developers.facebook.com/docs/messenger-platform/send-api-reference/airline-checkin-template#payload) of checkin template.       |
| options    | `Object` | Other optional parameters. For example, [messaging types](https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). |

Example:

```js
context.sendAirlineCheckinTemplate({
  introMessage: 'Check-in is available now.',
  locale: 'en_US',
