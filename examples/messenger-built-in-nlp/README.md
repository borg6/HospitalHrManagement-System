# Messenger Built-in NLP

## Install and Run

Download this example or clone [bottender](https://github.com/Yoctol/bottender).

```sh
curl https://codeload.github.com/Yoctol/bottender/tar.gz/master | tar -xz --strip=2 bottender-master/examples/messenger-built-in-nlp
cd messenger-built-in-nlp
```

Install dependencies:

```sh
npm install
```

You must fill `MESSENGER_APP_ID`, `MESSENGER_APP_SECRET`, `MESSENGER_PAGE_ID`, `MESSENGER_ACCESS_TOKEN`, and `MESSENGER_VERIFY_TOKEN` in your `.env` file.

If you are not familiar with Messenger Bot, you may refer to Bottender's doc, [Messenger Setup](https://bottender.js.org/docs/channel-messenger-setup), to find detailed instructions.

Also, to enable built-in NLP, you should setup related settings following the official docs [Messenger Built-in NLP](https://developers.facebook.com/docs/messenger-platform/built-in-nlp/).

After that, you can run the bot with this npm script:

```sh
npm run dev
```

This command starts a server listening at `http://localhost:5000` for bot development.

If you successfull