---
id: api-slack-client
title: SlackClient
original_id: api-slack-client
---

- [Usage](#usage)
- [Methods](#methods)
- [Debug Tips](#debug-tips)
- [Test](#test)

## Usage

Get the `SlackOAuthClient` instance using the `getClient` function:

```js
const { getClient } = require('bottender');

const client = getClient('slack');

// `client` is a `SlackOAuthClient` instance
const accountInfo = await context.client.getAccountInfo();
```

Or, get the `SlackOAuthClient` instance from the `context`:

```js
async function MyAction(context) {
  if (context.platform === 'slack') {
    // `context.client` is a `SlackOAuthClient` instance
    const accountInfo = await context.client.getAccountInfo();
  }
}
```

### Error Handling

`SlackOAuthClient` uses [axios](https://github.com/axios/axios) as HTTP client. We use [axios-error](https://github.com/bottenderjs/messaging-apis/tree/master/packages/axios-error) package to wrap API error instances for better formatting error messages. Calling `con