---
id: the-basics-session
title: Session
original_id: the-basics-session
---

## Introduction

Conversations may happen in a 1 on 1 chat or even in a channel with thousands of people in there. So, Bottender provides a mechanism called **session** to distinguish different conversations and store temporary data on the corresponding conversation. The session mechanism in Bottender bots is similar to the session mechanism in typical web servers.

Before using the session, you may want to know the following terminologies:

- [Session State](the-basics-session.md#session-state): temporary data on the conversation.
- [Session ID](the-basics-session.md#session-id): an unique identifier of the conversation.
- [Session Storage](the-basics-session.md#session-storage): where to store the session.

## Session State

Session state is the temporary data stored on the corresponding conversation. You can provide customized user experience with session state. For example, you can use session state to count the number of the received messages.

### A Counting Bot Example

Considering a counting bot which replies the number of message events it received, for example:

```
You > Hi
Bot > Count: 1
You > Hi
Bot > Count: 2
```

In this section, we will explain how to use the state correctly to build a counter. It begins with a count state variable, which is updated when the bot receives