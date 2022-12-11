
---
id: channel-line-flex
title: Flex Messages
original_id: channel-line-flex
---

## Introduction

[Flex messages](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/) are one of the killer features of LINE. As its name suggests, flex messages are highly flexible for various bot scenarios. For example, booking the hotel, showing product catalog, displaying task progress, or rating for tourism.

![](https://user-images.githubusercontent.com/3382565/68373526-1222d080-017e-11ea-9461-8f26fdfdc527.png)

If you are familiar with web programming, you find similarities between the structure of flex messages and HTML. For example:

- The size of a container is calculated based on its components and layout
- The hierarchical structure for the display of nested content

Although flexibility usually comes with complexity (in terms of the amount of code), flex messages are a practical approach to build highly customized chat UI.

Another benefit of flex messages is better desktop support, compared with mobile-only template messages and quick replies.

In the following sections, we will guide you through flex messages examples from simple to complex ones.

## A Minimum Flex Message

The following is a minimum "Hello World" example.

![](https://user-images.githubusercontent.com/3382565/68481176-783c5000-0271-11ea-9ab1-c9869a11f42a.png)

To send flex messages, you can call `context.sendFlex()` with your alt text and flex contents:

```js
async function App(context) {
  await context.sendFlex('This is a hello world flex', {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'text',
          text: 'Hello,',
        },
        {
          type: 'text',
          text: 'World!',
        },
      ],
    },
  });
}