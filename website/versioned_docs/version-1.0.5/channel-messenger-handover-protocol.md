---
id: channel-messenger-handover-protocol
title: Messenger Handover Protocol
---

<p><img width="360" src="https://user-images.githubusercontent.com/662387/71710521-a5534c00-2e37-11ea-8bb4-c3c0ea6656d9.jpg"/></p>

Since Messenger has become a critical customer support channel between brands and customers, the cooperation between Messenger Bots and human agents creates a complete customer journey on messaging business.

Here comes the Messenger handover protocol, which aims to make a smooth transition between Messenger Bots and human agents in the compact Messenger window. Technically speaking, this protocol allows a Facebook Page simultaneously owns multiple Facebook Apps, e.g., a Facebook app for auto-reply, and another Facebook app for human agents support.

> **Note:**
>
> - If you are curious how to change the profile image between Messenger Bot and human agents, please check Bottender's doc, [Using Persona](channel-messenger-persona.md).
> - For more information about handover protocol, please check Facebook's official doc, [Handover Protocol](https://developers.facebook.com/docs/messenger-platform/handover-protocol/)

### `Thread Control`: Who is Answering the Customer

Before going further, you have to know the concept of `Thread Control`. Assume that there are multiple Facebook Apps behind a single Facebook page. Only one Facebook owns the `Thread Control` of a specific customer at a time, which means only one Facebook App can reply to the customer.

### `Primary Receiver`: The Privilege App Role

Among all the apps behind the Facebook Page, only a single app could be `Primary Receiver`, the rest are `Secondary Receivers`.

You may treat `Primary Receiver` as the boss. S/he is the only one who owns the privilege to allow other apps to reply. S/he can also take back `Thread Control` from `Secondary Receivers` at any moment. By default, `Primary Receiver` owns the thread control, i.e., all messages sent to the `Primary Receiver.`

You, or the Facebook Page admin, can change the app role, i,e, which app is the `Primary Receiver` at the Page Settings.

The default setting of App roles is a bit mysterious. It is like no app is `Primary Receiver`. We would suggest you check your app role settings and assign Bottender's app as the `Primary Receiver` to manage the `Thread Control.`

![](https://user-images.githubusercontent.com/662387/71799800-34a76c00-3091-11ea-9c15-c6ed8069eda2.png)

![](https://user-images.githubusercontent.com/662387/71704543-010cdd80-2e16-11ea-8300-3e2f21291ce3.png)

In the following table, you can see the difference in capability between `Primary Receiver` and `Secondary Receiver`.

![](https://user-images.githubusercontent.com/662387/71662894-0aeafe00-2d8e-11ea-9de8-df807e7cfdd9.png)

> **Note:**
>
> - If you can't wait to begin with an example, you can jump to Bottender's example, [Messenger Handover](https://github.com/Yoctol/bottender/tree/master/examples/messenger-handover).
> - For more information, you can refer to Facebook's official doc, [Assigning App Roles](https://developers.facebook.com/docs/messenger-platform/handover-protocol/assign-app-roles)

## Passing Thread Control

The `Pass Thread Control` API allows one app to pass the control of a conversation to another. The calling app can pass optional metadata to the receiving app in the API request. By the `pass_thread_control` webhook, an app can know if it takes the thread control.

```js
async function App(context) {
  await context.passThreadControl('target-app-id');
}
```

`Page Inbox` is a unique official app of Facebook. It is the default Facebook app for every Facebook Page to reply to messages by human agents.

![](https://user-images.githubusercontent.com/662387/71801051-bc42aa00-3094-11ea-9137-e0cffc2a5bf6.png)

`Page Inbox` has three default folders: `Main`, `Done`, `Spam`. When you set `Page Inbox` as `Secondary Receiver`, all messages sent to your bot appears in the `Done` folder by default.

When the Page inbox has control of the conversation, all messages from the conversation move to the `Inbox` folder and wait for a human agent to respond. When you move a specific customer to the `Done` folder, you indirectly pass the `Thread Control` of the customer to `Primary Receiver`, which is usually the Facebook App of your Bottender project.

![](https://user-images.githubusercontent.com/662387/71801472-ffe9e380-3095-11ea-97d3-1b8f449b0b61.png)

```js
async function App(context) {
  await context.passThreadControlToPageInbox();
}
```

> - For more information, you can refer to Facebook's official doc, [Passing Thread Control](ht