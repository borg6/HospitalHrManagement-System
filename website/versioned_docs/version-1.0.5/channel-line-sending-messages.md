---
id: channel-line-sending-messages
title: Sending LINE Messages
original_id: channel-line-sending-messages
---

LINE has become one of the most popular chat channels between businesses and customers in Asia, especially in Japan, Taiwan, and Thailand. LINE's 2019 strategy, "[Life on LINE](https://www.youtube.com/watch?v=vrkVmOlaLis)," depicts a user's daily life surrounded with LINE's service, e.g., LINE Login, LINE Pay, LINE Music, LINE Today, LINE Things, LINE Spot. The completeness of the LINE's ecosystem offers more dynamic, integrated, online to offline possibilities of LINE Bots.

LINE Bots can be invited into a group, or focus on 1:1 communication. LINE Bots for group chat benefit from organic growth. Once a bot joined a group, it gains more exposure.

#### Reply API & Push API

Due to cost concerns, one thing developers should clearly understand before sending any messages is the difference between `Reply API` and `Push API.`

![messaging-api-thumb0](https://user-images.githubusercontent.com/662387/70490029-4cdea680-1b38-11ea-9979-2f9a68cb02cd.png)

- `Push API` allows developers to send messages directly to users anytime. However, it is only free in development. In production, you may refer to [LINE Official Account Subscription Plans](https://www.linebiz.com/id-en/service/line-account-connect/) to check out the messaging fee of your official account.

- Using `Reply API` is free. But bots can only reply once to a user who interacted with your LINE official account. For each bot reply, you can send up to 5 `Message Objects` (See LINE's official document, "[Sending reply messages](https://developers.line.biz/en/docs/messaging-api/building-bot/#sending-reply-messages)"). If you attempt to reply more than 5 `Message Objects`, you will see an error in console.

> **Note:**
>
> - It's a bit tricky to count the number of `Message Objects.` For example, each function call of `Sending Message,` `Sending Text Message,` or `Sending Template Messages` is calculated as one `Message Object.`, while the final attached `Quick Reply` doesn'