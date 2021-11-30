# With GCP Cloud Function

## Install and Run

Download this example or clone [bottender](https://github.com/Yoctol/bottender).

```sh
curl https://codeload.github.com/Yoctol/bottender/tar.gz/master | tar -xz --strip=2 bottender-master/examples/with-gcp-cloud-function
cd with-gcp-cloud-function
```

Install dependencies:

```sh
npm install
```

This is an example that runs on Facebook Messenger Platform. Therefore, you must fill `MESSENGER_APP_ID`, `MESSENGER_APP_SECRET`, `MESSENGER_PAGE_ID`, `MESSENGER_ACCESS_TOKEN`, and `MESSENGER_VERIFY_TOKEN` in your `.env` file.

If you are not familiar with Messenger Bot, you may refer to Bottender's doc, [Messenger Setup](https://bottender.js.org/docs/channel-messenger-setup), to find detailed instructions.

### Deploy on GCP

Next, you must deploy the bot on GCP as a serverless Cloud Function.

However, deploying our serverless bot func