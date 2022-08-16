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

The reason that we choose QnA Maker in the first place is because of the friendly building process. Unlike other NLU service requires a certain amount of time to build the intent and write the training