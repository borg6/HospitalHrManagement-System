---
id: api-viber-context
title: ViberContext
original_id: api-viber-context
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

