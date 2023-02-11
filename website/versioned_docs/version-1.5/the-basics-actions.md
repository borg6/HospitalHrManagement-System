---
id: the-basics-actions
title: Bottender Actions
original_id: the-basics-actions
---

**Bottender actions** are the smallest building blocks of Bottender apps. An action describes what you want your bot to do when receiving an event:

```js
async function SayHi(context) {
  await context.sendText('Hi!');
}
```

A typical action takes `context` as the first argument. The `context` variable provides the data in the conversation context and various methods to interact with the user. You can use those data and methods to build your actions. For example, you may create an `Echo` action to reply with the text it receives to the user using `context.sendText(context.event.text)`:

```js
async function Echo(context) {
  if (context.event.isText) {
    await context.sendText(context.event.text);
  }
}
```

> **Note:** The `context` variable provides methods differently among platforms. You can apply a progressive enhancement strategy using platform-specific methods.

## Composing Actions

Bottender actions are composable. Actions can refer to other actions as their return value.
