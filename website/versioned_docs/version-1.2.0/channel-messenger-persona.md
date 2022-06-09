---
id: channel-messenger-persona
title: Using Persona
original_id: channel-messenger-persona
---

## Messenger Persona Practical Guide

### Persona: Who is behind the Business Page?

The most suitable scenario for `Persona` is customer care.

Before introducing Messenger Bot, Facebook created a thriving ecosystem of Business Pages with useful CRM (Customer Relationship Management). That is, customers got used to message business and get replies from a human agent.

Today, the response from the Business Page could be a bot. To give the customer a clear understanding of whether a human agent or a bot representing the Business Page, the `Persona` API allows a business to introduce a virtual persona into the thread. A virtual persona shows a unique icon and sends messages with annotation of the name of the sender's persona and its belonged Page.

![39993793_311437072745802_2909561891720265728_n](https://user-images.githubusercontent.com/662387/69112041-4e2d2e00-0aba-11ea-8e44-02aaaf804b5d.png)

> **Note:**
> If you are interested in Facebook's official document, you may refer to [Using Personas](https://developers.facebook.com/docs/messenger-platform/send-messages/personas/)

## Basic Usage of the Persona API

In the following section, you can see the beginning usage of `Persona.`

> **Note**
> If you prefer to understand `Persona` by an example, please refer to the Bottender example, [Messenger Persona](https://github.com/Yoctol/bottender/tree/master/examples/messenger-persona)

### Create a Persona and Get Persona ID

The basic idea behind creating a persona is sending a request to Page's `/persona` endpoint. Hence, please remember to finish relevant Facebook Page Token settings in your `bottender.config.js`.

You can create a persona with the following commands. The property should include