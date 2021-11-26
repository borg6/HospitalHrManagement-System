const { router, slack, text } = require('bottender/router');

async function HandleText(context) {
  // send a message with buttons and menu
  await context.chat.postMessage({
    attachments: [
      {
        text: 'Choose a game to play',
        fallback: 'You are unable to choose a game',
        callback_id: 'wopr