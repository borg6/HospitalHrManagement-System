---
id: channel-messenger-routing
title: Messenger Routing
original_id: channel-messenger-routing
---

Bottender offers a bunch of helpers to route within your Messenger or multi-platform application. For example, you may use Messenger particular routes within your [`router`](the-basics-routing.md):

```js
const { router, messenger } = require('bottender/router');

function App() {
  return router([
    messenger.message(HandleMessage),
    messenger.accountLinking.linked(HandleAccountLinkingLinked),
    messenger.accountLinking.unlinked(HandleAccountLinkingUnlinked),
    messenger.accountLinking(HandleAccountLinking),
    messenger.delivery(HandleDelivery),
    messenger.echo(HandleEcho),
    messenger.gamePlay(HandleGamePlay),
    messenger.passThreadControl(HandlePassThreadControl),
    messenger.takeThreadControl(HandleTakeThreadControl),
    messenger.requestThreadControl(HandleRequestThreadControl),
    messenger.appRoles(HandleAppRoles),
    messenger.optin(HandleOptin),
    messenger.policyEnforcement(HandlePolicyEnforcement),
    messenger.postback(HandlePostback),
    messenger.read(HandleRead),
    messenger.referral(HandleReferral),
    messenger.standby(HandleStandby),
    messenger(HandleMessenger),
  ]);
}

async function HandleMessage(context) {
  /* skip... */
}
async function HandleAccountLinkingLinked(context) {
  /* skip... */
}
async function HandleAccountLinkingUnlinked(context) {
  /* skip... */
}
async function HandleAccountLinking(context) {
  /* skip... */
}
async function HandleDelivery(context) {
  /* skip... */
}
async function HandleEcho(context) {
  /* skip... */
}
async function HandleGamePlay(con