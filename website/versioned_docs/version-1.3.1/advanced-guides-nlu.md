---
id: advanced-guides-nlu
title: Natural Language Understanding
original_id: advanced-guides-nlu
---

## Leverage NLU Technologies

When it comes to building a bot for open questions, e.g., FAQ of customer support, or an in-bot search engine, you may think of making a bot with the NLU engine to analyze the user's input. The primary mission of NLU is to analyze the user's intent and entities to respond with the right answer.

A well-trained NLU engine usually has a 90%+ accurate rate in terms of telling the right intent or find the user input is beyond the current knowledge base. Sometimes, it takes time and a few iterations to find the best intent structure and train the NLU engine smart.

In the following sections, you can see how to integrate Bottender with various modern NLU services:

- [QnA Maker](advanced-guides-nlu.md#building-with-qna-maker)
- [Dialogflow](advanced-guides-nlu.md#building-with-dialogflow)
- [LUIS](advanced-guides-nlu.md#building-with-luis)
- [Rasa](advanced-guides-nlu.md#building-with-rasa-nlu)

## Building with QnA Maker

The reason that we choose QnA Maker in the first place is because of the friendly building process. Unlike other NLU service requires a certain amount of time to build the intent and write the training phrases. In QnA Maker, you just need to copy and paster your FAQ, and the NLU engine is ready to use.

### Step 1: QnA Maker Setup

To build a bot integrated with [QnA Maker](https://www.qnamaker.ai/), you have to create the QnA Maker knowledge base and publish it following the [Official Guide](https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/quickstarts/create-publish-knowledge-base).

After you publish your knowledge base, you get `RESOURCE_NAME`, `KNOWLEDGE_BASE_ID`, and `ENDPOINT_KEY` (See [Here](https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/quickstarts/get-answer-from-knowledge-base-using-url-tool?pivots=url-test-tool-postman) for detailed guide). Make sure you copy them into the `.env` file.

```
# .env

RESOURCE_NAME=
KNOWLEDGE_BASE_ID=
ENDPOINT_KEY=
```

### Step 2: Connect Bottender with QnA Maker by `bottender/qna-maker`

To make the bot development enjoyable, we made a [`bottender/qna-maker`](https://github.com/Yoctol/bottender/tree/master/packages/bottender-qna-maker) package. You can install the package with `npm` or `yarn`.

With `npm`:

```sh
npm install @bottender/qna-maker
```

Or with `yarn`:

```sh
yarn add @bottender/qna-maker
```

In the following sample code, you can see how elegant it is to integra