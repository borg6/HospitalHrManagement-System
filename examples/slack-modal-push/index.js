const { router, route, slack } = require('bottender/router');

let counter = 1;

function getBlocks(text, buttonValue) {
  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text,
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: buttonValue,
            emoji: true,
          },
          value: buttonValue,
        },
      ],
    },
  ];
}

function getModalView() {
  return {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: `Modal ${counter}`,
    },
    clearOnClose: true,
    notifyOnClose: true,
    blocks: getBlocks(`in modal ${counter}`, 'push modal'),
  };
}

async function ShowModal(context) {
  const { triggerId } = context.event.rawEvent;
  await context.views.open({
    triggerId,
    view: getModalView(),
  });
}

as