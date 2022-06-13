---
id: the-basics-session
title: Session
original_id: the-basics-session
---

## Introduction

Conversations may happen in an 1 on 1 private chat or even in a channel with a lot of people in there. Due to this, Bottender provides a mechanism called "session" to distinguish different conversations and store temporary data on the corresponding conversation. It's just like how sessions works in the typical web server. The following are jargon that you may want to know when using the session:

- [Session state](the-basics-session.md#session-state): temporary data on the conversation.
- [Session id](the-basics-session.md#session-id): an unique identifier of the conversation.
- [Session storage](the-basics-session.md#session-storage): where to store the session.

## Session State

`State` is widely used in flow control of daily machines, e.g., traffic light. The change of state is in response to external inputs and/or conditions are satisfied. For example, a green traffic light (a state) changes to the yellow traffic light after 60 sec (a satisfied time condition).

### A Counting Bot Example

Considering a counting bot which replies the number of message events it received, for example:

```
You > Hi
Bot > Count: 1
You > Hi
Bot > Count: 2
```

In this section, we will explain how to use the state correctly to build a counter. It begins with a count state variable, which will be updated when the bot receives an event.

Let's start with a static action like this:

```js
async function EventCount(context) {
  await context.sendText('Count: 1');
}
```

### Adding State to the Conversation

1. Set initial state in `bottender.config.js` file:

```js
module.exports = {
  initialState: {
    count: 0,
  },
};
```

After adding this, Bottender will set the initial state to the specified object for the new conversation session.

2. Access state value using `context.state`:

```js
async function EventCount(context) {
  const count = context.state.count + 1;
  await context.sendText(`Count: ${count}`);
}
```

Even though we use the state variable to render the message content, it always gets `Count: 1` as the result. That's why step 3 is necessary.

3. Set state value using `context.setState()`:

```js
async function EventCount(context) {
  const count = context.state.count + 1;

  context.setState({
    count,
  });

  await context.sendText(`Count: ${count}`);
}
```

Then it works as expected.

> **Note:** don't modify state directly using `this.state.stateKey = stateValue;`, it may cause unexpected behavior in the future.

### State Updates are Merged

When you call `setState()`, Bottender shallow merges the object you provide into the current state.

```js
context.state; // { count: 1 }

context.setState({
  myObject: {},
});

context.state; // { count: 1, myObject: {} }
```

But if you want to do a deeper merge, you need to do it explicitly:

```js
context.setState({
  myObject: {
    ...context.myObject,
    key: value,
  },
});
```

### Debug State in Console Mode

In ["Console Mode"](the-basics-console-mode.md), you can leverage the convenient built-in command - `/state` to help you debugging you state transition:

```
You > /state
```

This command formats the state with `JSON.stringify()` and send the result as a bot message to you:

```
Bot > { "count": 1 }
```

## Session ID

Every session has an unique identifier on it. You can access it using `session.id`. For demonstration, The following code sends platform and session id information to the user:

```js
module.exports = async function App(context) {
  await context.sendText(`context.platform: ${context.platform}`);
  await context.sendText(`session.id: ${context.session.id}`);
};
```

To avoid ID conflict between platforms, Bottender adds platform prefix to the session key.

For example, `telegram:16423...` on Telegram and `line:U4af4980629...` on LINE.

The session key itself can be very different between platforms. It may come from user id, channel id, group id, room id, or whatever can be used to distinguish the conversation.

> **Note:** There are three types of sources on the LINE platform defined in [the LINE official document](https://developers.line.biz/en/reference/messaging-api/#common-properties): user, group and room.
>
> If a request comes from a user, the session key will be `source.userId`, for example: `line:U4af4980629...`.
> If a request comes from a group, the session key will be `source.groupId`, for example: `line:Ca56f94637c...`.
> If a request comes from a room, the session key will be `source.roomId`, for example: `line:Ra8dbf4673c...`

## Session Storage

Since HTTP driven applications are stateless, the mission of sessions is to store the context of users during conversations. Bottender offers a variety of session drivers right out of the box, e.g., memory, file, redis, and mongo. These drivers could be accessed through an expressive, unified API.

From connectors, the information of session could be accessed, e.g., session id,
plus, whether the session is between a bot and single user, or between a bot and a group of users. One bot could support multiple messaging platforms at once, and one connector refers to one messaging platform.

You can specify an explicit session expiration time to reset the state. It makes a bot more human-like by forgetting (initializing) the state after the conversation has been inactive for a while.
