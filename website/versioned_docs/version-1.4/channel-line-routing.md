---
id: channel-line-routing
title: LINE Routing
original_id: channel-line-routing
---

Bottender offers a bunch of helpers to route within your LINE or multi-platform app. For example, you may use LINE particular routes within your [`router`](the-basics-routing.md):

```js
const { router, line } = require('bottender/router');

function App() {
  return router([
    line.message(HandleMessage),
    line.follow(HandleFollow),
    line.unfollow(HandleUnfollow),
    line.join(HandleJoin),
    line.leave(HandleLeave),
    line.memberJoined(HandleMemberJoined),
    line.memberLeft(HandleMemberLeft),
    line.postback(HandlePostback),
    line.beacon.enter(HandleBeaconEnter),
    line.beacon.banner(HandleBeaconBanner),
    line.beacon.stay(HandleBeaconStay),
    line.accountLink(HandleAccountLink),
    line.things.link(HandleThingsLink),
    line.things.unlink(HandleThingsUnlink),
    line.things.scenarioResult(HandleThingsScenarioResult),
    line.any(HandleLine),
  ]);
}

/* Note: You need to implement those functions */
async function HandleMessage(context) {}
async function HandleFollow(context) {}
async function HandleUnfollow(context) {}
async function HandleJoin(context) {}
async function HandleLeave(context) {}
async function HandleMemberJoined(con