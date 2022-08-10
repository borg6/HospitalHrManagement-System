---
id: channel-line-rich-menu
title: LINE Rich Menu
original_id: channel-line-rich-menu
---

## What is Rich Menu

Rich menu is a customizable menu that is displayed on the chat screen to help users interact with your LINE official account. For further information, you can check out the [Official Document](https://developers.line.biz/en/docs/messaging-api/using-rich-menus).

There are four steps to set up a rich menu for your users:

1. Prepare a rich menu image
2. Create a rich menu
3. Upload the rich menu image
4. Link the rich menu to users

## Prepare a Rich Menu Image

A rich menu image is an image file. You can define up to 20 different tappable areas in the image. Here's an example rich menu image:

![Rich menu example](https://i.imgur.com/SVQcKTE.jpg)

In this image, there're six simple buttons. We will define the tappable areas of these buttons in the next step.

Also, remember your rich menu image must follow these requirements:

- Image format: JPEG or PNG
- Image size (pixels): 2500x1686, 2500x843, 1200x810, 1200x405, 800x540, 800x270
- Maximum file size: 1 MB

## Create a Rich Menu

Before you create a rich menu, you have to create a [rich menu object](https://developers.line.biz/en/reference/messaging-api/#rich-menu-object) which defines the menu's size, tappable areas, etc.

Next, you can create a rich menu by sending an HTTP POST request to the `https://api.line.me/v2/bot/richmenu` endpoint. You have to put your rich menu object in the body and your channel access token in the `Authorization` header.

Here's an example request:

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu \
  -H 'Authorization: Bearer {channel access token}' \
  -H 'Content-Type:application/json' \
  -d \
  '{
    "size":{
        "width":2500,
        "height":1686
    },
    "selected":false,
    "name":"Controller",
    "chatBarText":"Controller",
    "areas":[
        {
          "bounds":{
              "x":551,
              "y":325,
              "width":321,
              "height":321
          },
          "action":{
              "type":"message",
              "text":"up"
          }
        },
        {
          "bounds":{
              "x":876,
              "y":651,
              "width":321,
              "height":321
          },
          "action":{
              "type":"message",
              "text":"right"
          }
        },
        {
          "bounds":{
              "x":551,
           