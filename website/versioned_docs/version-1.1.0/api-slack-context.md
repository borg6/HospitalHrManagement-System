---
id: api-slack-context
title: SlackContext
original_id: api-slack-context
---

#### Chat API

#### `postMessage(message [, options])` - [Official docs](https://api.slack.com/methods/chat.postMessage)

Alias: `sendText`.

Sends a message to the channel.

| Param   | Type                              | Description                                                        |
| ------- | --------------------------------- | ------------------------------------------------------------------ |
| message | <code>String &#124; Object</code> | The message to be sent, can be text message or attachment message. |
| options | `Object`                          | Other optional parameters.                                         |

Example:

```js
context.postMessage({ text: 'Hello!' });
context.postMessage({ attachments: [someAttachments] });
context.postMessage('Hello!');
context.postMessage('Hello!', { asUser: true });
```

If you send message with `attachments`, `messaging-api-slack` will automatically stringify the `attachments` field for you.

```js
context.postMessage(
  {
    text: 'Hello!',
    at