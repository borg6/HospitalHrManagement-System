---
id: api-telegram-context
title: TelegramContext
original_id: api-telegram-context
---

- [Send API](#send-api)
- [Get API](#get-api)
- [Updating API](#updating-api)
- [Group API](#group-api)
- [Payments API](#payments-api)
- [Inline Mode API](#inline-mode-api)
- [Game API](#game-api)
- [Others](#others)

<a id="send-api" />

### Send API - [Official Docs](https://core.telegram.org/bots/api#available-methods)

#### `sendMessage(text [, options])` - [Official Docs](https://core.telegram.org/bots/api/#sendmessage)

Sends text messages.

| Param   | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| text    | `String` | Text of the message to be sent. |
| options | `Ob