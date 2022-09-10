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

Before you create a rich menu, you have to create a [rich menu object](https://develop