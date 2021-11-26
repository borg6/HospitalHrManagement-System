# Slack Home Tab

## Install and Run

Download this example or clone [bottender](https://github.com/Yoctol/bottender).

```sh
curl https://codeload.github.com/Yoctol/bottender/tar.gz/master | tar -xz --strip=2 bottender-master/examples/slack-home-tab
cd slack-home-tab
```

Install dependencies:

```sh
npm install
```

You must fill `SLACK_ACCESS_TOKEN` and `SLACK_SIGNING_SECRET` in your `.env` file.

If you are not familiar with Slack Bot, you may refer to Bottender's doc, [Slack Setup](https://bottender.js.org/docs/channel-slack-setup), to find detailed instructions.

After that, you can run the bot with this npm script:

```sh
npm run dev
```

This command starts a server listening at `http://localhost:5000` for bot development.

If you successfully start the server, you get a webhook URL in the format of `https://xxxxxxxx.ngrok.io/webhooks/slack` from your terminal.

## Sl