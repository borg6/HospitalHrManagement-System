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

Let's start with a 