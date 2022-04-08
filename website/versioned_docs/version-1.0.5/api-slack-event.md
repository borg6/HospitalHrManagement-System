---
id: api-slack-event
title: SlackEvent
original_id: api-slack-event
---

#### `rawEvent`

Underlying raw event from Slack.

Example:

```js
event.rawEvent;
// {
//   type: 'message',
//   channel: 'C2147483705',
//   user: 'U2147483697',
//   text: 'Hello world',
//   ts: '1355517523.000005',
// }
```

#### `isMessage`

Determine if the event is a message event.

Example:

```js
event.isMessage; // true
```

#### `isChannelsMessage`

Determine if the event is a message event sent from channels.

Example:

```js
event.isChannelsMessage; // true
```

#### `isGroupsMessage`

Determine if the event is a message event sent from groups.

Example:

```js
event.isGroupsMessage; // true
```

#### `isImMessage`

Determine if the e