---
id: api-line-client
title: LineClient
original_id: api-line-client
---

- [Usage](#usage)
- [Methods](#methods)
  - [Reply API](#reply-api)
    - [Imagemap Messages](#reply-imagemap-messages)
    - [Template Messages](#reply-template-messages)
    - [Flex Messages](#reply-flex-messages)
  - [Push API](#push-api)
    - [Imagemap Messages](#push-imagemap-messages)
    - [Template Messages](#push-template-messages)
    - [Flex Messages](#push-flex-messages)
  - [Multicast API](#multicast-api)
    - [Imagemap Messages](#multicast-imagemap-messages)
    - [Template Messages](#multicast-template-messages)
    - [Flex Messages](#multicast-flex-messages)
  - [Quick Replies](#quick-replies)
  - [Content API](#content-api)
  - [Profile API](#profile-api)
  - [Group/Room Member Profile API](#grouproom-member-profile-api)
  - [Group/Room Member IDs API](#grouproom-member-ids-api)
  - [Leave API](#leave-api)
  - [Rich Menu API](#rich-menu-api)
  - [Account Link API](#account-link-api)
  - [LINE Front-end Framework API](#liff-api)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `LineClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

// This `client` variable is a `LineClient` instance
const client = getClient('line');

await client.pushText(USER_ID, 'Hello!');
```

Or, get the `LineClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'line') {
    // `context.client` is a `LineClient` instance
    await context.client.pushText(USER_ID, 'Hello!');
  }
}
```

### Error Handling

`LineClient` uses [axios](https://git