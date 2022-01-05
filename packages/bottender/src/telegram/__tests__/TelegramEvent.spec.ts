
import MockDate from 'mockdate';

import TelegramEvent from '../TelegramEvent';

const textMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    text: 'text',
  },
};

const stickerMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    sticker: {
      fileId: '123',
      width: 50,
      height: 50,
    },
  },
};

const videoMessage = {
  message: {
    messageId: 666,
    from: {
      id: 313534466,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    video: {
      fileId: '321',
      width: 100,
      height: 100,
      duration: 199,
    },
  },
};

const voiceMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    voice: {
      fileId: '543',
      duration: 299,
    },
  },
};

const videoNoteMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    videoNote: {
      fileId: '654',
      length: 100,
      duration: 399,
    },
  },
};

const contactMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    contact: {
      phoneNumber: '123456789',
      firstName: 'first',
    },
  },
};

const photoMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    photo: [
      {
        fileId: '112',
        width: 100,
        height: 100,
      },
      {
        fileId: '116',
        width: 50,
        height: 50,
      },
    ],
  },
};

const audioMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    audio: {
      fileId: '321',
      duration: 100,
      title: 'audioooooooo',
    },
  },
};

const locationMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    location: {
      longitude: '111.111',
      latitude: '99.99',
    },
  },
};

const venueMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    venue: {
      location: {
        longitude: '111.111',
        latitude: '99.99',
      },
      title: 'title',
      address: 'addressssss',
    },
  },
};

const documentMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    document: {
      fileId: '234',
      fileName: 'file',
    },
  },
};

const gameMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    game: {
      title: 'gammmmmmmme',
      description: 'Description of the game',
      photo: [
        {
          fileId: '112',
          width: 100,
          height: 100,
        },
        {
          fileId: '116',
          width: 50,
          height: 50,
        },
      ],
    },
  },
};

const groupMessage = {
  updateId: 141921689,
  message: {
    messageId: 238,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    chat: {
      id: -225456171,
      title: 'Bottender',
      type: 'group',
      allMembersAreAdministrators: true,
    },
    date: 1515758146,
    text: 'hi',
  },
};

const editedMessage = {
  updateId: 141921687,
  editedMessage: {
    messageId: 229,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    date: 1515736358,
    editDate: 1515758017,
    text: 'hiiiii',
  },
};

const groupEditedMessage = {
  updateId: 141921688,
  editedMessage: {
    messageId: 234,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    chat: {
      id: -225456171,
      title: 'Bottender',
      type: 'group',
      allMembersAreAdministrators: true,
    },
    date: 1515736470,
    editDate: 1515758048,
    text: 'hiiiii',
  },
};

const channelPost = {
  updateId: 141921710,
  channelPost: {
    messageId: 2,
    chat: {
      id: -1001305240521,
      title: 'channel_12345',
      type: 'channel',
    },
    date: 1515760382,
    text: 'post~~~',
  },
};

const editedChannelPost = {
  updateId: 141921711,
  editedChannelPost: {
    messageId: 2,
    chat: {
      id: -1001305240521,
      title: 'channel_12345',
      type: 'channel',
    },
    date: 1515760382,
    editDate: 1515760478,
    text: 'post~~~edited',
  },
};

const inlineQuery = {
  updateId: 141921700,
  inlineQuery: {
    id: '1837258670654537434',
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    query: '123',
    offset: '',
  },
};

const chosenInlineResult = {
  updateId: 141921701,
  chosenInlineResult: {
    resultId: '2837258670654537434',
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    inlineMessageId: '1837258670654537434',
    query: '123',
  },
};

const callbackQuery = {
  updateId: 141921690,
  callbackQuery: {
    id: '123',
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    message: {
      messageId: 666,
      from: {
        id: 313534466,
        isBot: true,
        firstName: 'bot_first',
        username: 'bot_name',
      },
      chat: {
        id: 427770117,
        firstName: 'first',
        lastName: 'last',
        type: 'private',
      },
      date: 1499402829,
      text: 'text',
    },
    chatInstance: '-1828607021492040088',
    data: 'data',
  },
};

const groupCallbackQuery = {
  updateId: 141921690,
  callbackQuery: {
    id: '1837258667245133763',
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    message: {
      messageId: 237,
      from: {
        id: 313534466,
        isBot: true,
        firstName: 'bot_first',
        username: 'bot_name',
      },
      chat: {
        id: -225456171,
        title: 'Bottender',
        type: 'group',
        allMembersAreAdministrators: true,
      },
      date: 1515736481,
      text: 'Hello World',
    },
    chatInstance: '-582211693826679000',
    data: '123',
  },
};

const shippingQuery = {
  updateId: 141921690,
  shippingQuery: {
    id: '123',
    from: {
      id: 427770117,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    invoicePayload: 'bot payload',
    shippingAddress: {
      countryCode: 'US',
      state: 'New York',
      city: 'New York',
      streetLine1: 'xx',
      streetLine2: 'xx',
      postCode: '10001',
    },
  },
};

const preCheckoutQuery = {
  updateId: 141921690,
  preCheckoutQuery: {
    id: '123',
    from: {
      id: 427770117,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    currency: 'USD',
    totalAmount: 145,
    invoicePayload: 'bot payload',
  },
};

const poll = {
  updateId: 141921690,
  poll: {
    id: '123',
    question: 'What is it?',
    options: [
      { text: 'A', voterCount: 0 },
      { text: 'B', voterCount: 0 },
    ],
    isClosed: false,
  },
};

const replyToTextMessage = {
  message: {
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    text: 'replyText',
    replyToMessage: {
      messageId: 777,
      from: {
        id: 427770117,
        isBot: false,
        firstName: 'first',
        lastName: 'last',
        languageCode: 'en',
      },
      chat: {
        id: 427770117,
        firstName: 'first',
        lastName: 'last',
        type: 'private',
      },
      date: 1499402829,
      text: 'text',
    },
  },
};

it('#rawEvent', () => {
  expect(new TelegramEvent(textMessage).rawEvent).toEqual(textMessage);
  expect(new TelegramEvent(editedMessage).rawEvent).toEqual(editedMessage);
  expect(new TelegramEvent(channelPost).rawEvent).toEqual(channelPost);
  expect(new TelegramEvent(editedChannelPost).rawEvent).toEqual(
    editedChannelPost
  );
  expect(new TelegramEvent(inlineQuery).rawEvent).toEqual(inlineQuery);
  expect(new TelegramEvent(chosenInlineResult).rawEvent).toEqual(
    chosenInlineResult
  );
  expect(new TelegramEvent(callbackQuery).rawEvent).toEqual(callbackQuery);
  expect(new TelegramEvent(shippingQuery).rawEvent).toEqual(shippingQuery);
  expect(new TelegramEvent(preCheckoutQuery).rawEvent).toEqual(
    preCheckoutQuery
  );
  expect(new TelegramEvent(poll).rawEvent).toEqual(poll);
  expect(new TelegramEvent(replyToTextMessage).rawEvent).toEqual(
    replyToTextMessage
  );
});

it('#timestamp', () => {
  MockDate.set('2020-07-14'); // 15946848000
  expect(new TelegramEvent(textMessage).timestamp).toEqual(1499402829000);
  expect(new TelegramEvent(groupMessage).timestamp).toEqual(1515758146000);
  expect(new TelegramEvent(editedMessage).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(channelPost).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(editedChannelPost).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(inlineQuery).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(chosenInlineResult).timestamp).toEqual(
    1594684800000
  );
  expect(new TelegramEvent(callbackQuery).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(shippingQuery).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(preCheckoutQuery).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(poll).timestamp).toEqual(1594684800000);
  expect(new TelegramEvent(replyToTextMessage).timestamp).toEqual(
    1499402829000
  );
  MockDate.reset();
});

it('#isMessage', () => {
  expect(new TelegramEvent(textMessage).isMessage).toEqual(true);
  expect(new TelegramEvent(groupMessage).isMessage).toEqual(true);
  expect(new TelegramEvent(editedMessage).isMessage).toEqual(false);
  expect(new TelegramEvent(channelPost).isMessage).toEqual(false);
  expect(new TelegramEvent(editedChannelPost).isMessage).toEqual(false);
  expect(new TelegramEvent(inlineQuery).isMessage).toEqual(false);
  expect(new TelegramEvent(chosenInlineResult).isMessage).toEqual(false);
  expect(new TelegramEvent(callbackQuery).isMessage).toEqual(false);
  expect(new TelegramEvent(shippingQuery).isMessage).toEqual(false);
  expect(new TelegramEvent(preCheckoutQuery).isMessage).toEqual(false);
  expect(new TelegramEvent(poll).isMessage).toEqual(false);
  expect(new TelegramEvent(replyToTextMessage).isMessage).toEqual(true);
});

it('#message', () => {
  expect(new TelegramEvent(textMessage).message).toEqual({
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    text: 'text',
  });
  expect(new TelegramEvent(groupMessage).message).toEqual({
    messageId: 238,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'user_first',
      lastName: 'user_last',
      languageCode: 'en',
    },
    chat: {
      id: -225456171,
      title: 'Bottender',
      type: 'group',
      allMembersAreAdministrators: true,
    },
    date: 1515758146,
    text: 'hi',
  });
  expect(new TelegramEvent(editedMessage).message).toEqual(null);
  expect(new TelegramEvent(channelPost).message).toEqual(null);
  expect(new TelegramEvent(editedChannelPost).message).toEqual(null);
  expect(new TelegramEvent(inlineQuery).message).toEqual(null);
  expect(new TelegramEvent(chosenInlineResult).message).toEqual(null);
  expect(new TelegramEvent(callbackQuery).message).toEqual(null);
  expect(new TelegramEvent(shippingQuery).message).toEqual(null);
  expect(new TelegramEvent(preCheckoutQuery).message).toEqual(null);
  expect(new TelegramEvent(poll).message).toEqual(null);
  expect(new TelegramEvent(replyToTextMessage).message).toEqual({
    messageId: 666,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    text: 'replyText',
    replyToMessage: {
      messageId: 777,
      from: {
        id: 427770117,
        isBot: false,
        firstName: 'first',
        lastName: 'last',
        languageCode: 'en',
      },
      chat: {
        id: 427770117,
        firstName: 'first',
        lastName: 'last',
        type: 'private',
      },
      date: 1499402829,
      text: 'text',
    },
  });
});

it('#isText', () => {
  expect(new TelegramEvent(callbackQuery).isText).toEqual(false);
  expect(new TelegramEvent(textMessage).isText).toEqual(true);
  expect(new TelegramEvent(stickerMessage).isText).toEqual(false);
  expect(new TelegramEvent(replyToTextMessage).isText).toEqual(true);
});

it('#text', () => {
  expect(new TelegramEvent(callbackQuery).text).toEqual(null);
  expect(new TelegramEvent(textMessage).text).toEqual('text');
  expect(new TelegramEvent(stickerMessage).text).toEqual(null);
  expect(new TelegramEvent(replyToTextMessage).text).toEqual('replyText');
});

it('#isReplyToMessage', () => {
  expect(new TelegramEvent(textMessage).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(groupMessage).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(editedMessage).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(channelPost).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(editedChannelPost).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(inlineQuery).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(chosenInlineResult).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(callbackQuery).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(shippingQuery).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(preCheckoutQuery).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(poll).isReplyToMessage).toEqual(false);
  expect(new TelegramEvent(replyToTextMessage).isReplyToMessage).toEqual(true);
});

it('#replyToMessage', () => {
  expect(new TelegramEvent(textMessage).replyToMessage).toEqual(null);
  expect(new TelegramEvent(editedMessage).replyToMessage).toEqual(null);
  expect(new TelegramEvent(channelPost).replyToMessage).toEqual(null);
  expect(new TelegramEvent(editedChannelPost).replyToMessage).toEqual(null);
  expect(new TelegramEvent(inlineQuery).replyToMessage).toEqual(null);
  expect(new TelegramEvent(chosenInlineResult).replyToMessage).toEqual(null);
  expect(new TelegramEvent(callbackQuery).replyToMessage).toEqual(null);
  expect(new TelegramEvent(shippingQuery).replyToMessage).toEqual(null);
  expect(new TelegramEvent(preCheckoutQuery).replyToMessage).toEqual(null);
  expect(new TelegramEvent(poll).replyToMessage).toEqual(null);
  expect(new TelegramEvent(replyToTextMessage).replyToMessage).toEqual({
    messageId: 777,
    from: {
      id: 427770117,
      isBot: false,
      firstName: 'first',
      lastName: 'last',
      languageCode: 'en',
    },
    chat: {
      id: 427770117,
      firstName: 'first',
      lastName: 'last',
      type: 'private',
    },
    date: 1499402829,
    text: 'text',
  });
});

it('#isAudio', () => {
  expect(new TelegramEvent(callbackQuery).isAudio).toEqual(false);
  expect(new TelegramEvent(textMessage).isAudio).toEqual(false);
  expect(new TelegramEvent(audioMessage).isAudio).toEqual(true);
  expect(new TelegramEvent(replyToTextMessage).isAudio).toEqual(false);
});

it('#audio', () => {
  expect(new TelegramEvent(callbackQuery).audio).toEqual(null);
  expect(new TelegramEvent(textMessage).audio).toEqual(null);
  expect(new TelegramEvent(audioMessage).audio).toEqual({
    fileId: '321',
    duration: 100,
    title: 'audioooooooo',
  });
  expect(new TelegramEvent(replyToTextMessage).audio).toEqual(null);
});

it('#isDocument', () => {
  expect(new TelegramEvent(callbackQuery).isDocument).toEqual(false);
  expect(new TelegramEvent(textMessage).isDocument).toEqual(false);
  expect(new TelegramEvent(documentMessage).isDocument).toEqual(true);
  expect(new TelegramEvent(replyToTextMessage).isDocument).toEqual(false);
});

it('#document', () => {
  expect(new TelegramEvent(callbackQuery).document).toEqual(null);
  expect(new TelegramEvent(textMessage).document).toEqual(null);
  expect(new TelegramEvent(documentMessage).document).toEqual({
    fileId: '234',
    fileName: 'file',
  });
  expect(new TelegramEvent(replyToTextMessage).document).toEqual(null);
});

it('#isGame', () => {
  expect(new TelegramEvent(callbackQuery).isGame).toEqual(false);
  expect(new TelegramEvent(textMessage).isGame).toEqual(false);
  expect(new TelegramEvent(gameMessage).isGame).toEqual(true);
  expect(new TelegramEvent(replyToTextMessage).isGame).toEqual(false);
});

it('#game', () => {
  expect(new TelegramEvent(callbackQuery).game).toEqual(null);
  expect(new TelegramEvent(textMessage).game).toEqual(null);
  expect(new TelegramEvent(gameMessage).game).toEqual({
    title: 'gammmmmmmme',
    description: 'Description of the game',
    photo: [
      {
        fileId: '112',
        width: 100,
        height: 100,
      },
      {
        fileId: '116',
        width: 50,
        height: 50,
      },
    ],
  });
  expect(new TelegramEvent(replyToTextMessage).game).toEqual(null);
});

it('#isPhoto', () => {
  expect(new TelegramEvent(callbackQuery).isPhoto).toEqual(false);
  expect(new TelegramEvent(textMessage).isPhoto).toEqual(false);
  expect(new TelegramEvent(photoMessage).isPhoto).toEqual(true);
  expect(new TelegramEvent(replyToTextMessage).isPhoto).toEqual(false);
});

it('#photo', () => {
  expect(new TelegramEvent(callbackQuery).photo).toEqual(null);
  expect(new TelegramEvent(textMessage).photo).toEqual(null);
  expect(new TelegramEvent(photoMessage).photo).toEqual([
    {
      fileId: '112',
      width: 100,
      height: 100,
    },
    {
      fileId: '116',
      width: 50,
      height: 50,
    },
  ]);
  expect(new TelegramEvent(replyToTextMessage).photo).toEqual(null);
});

it('#isSticker', () => {
  expect(new TelegramEvent(callbackQuery).isSticker).toEqual(false);
  expect(new TelegramEvent(textMessage).isSticker).toEqual(false);
  expect(new TelegramEvent(stickerMessage).isSticker).toEqual(true);
  expect(new TelegramEvent(replyToTextMessage).isSticker).toEqual(false);
});

it('#sticker', () => {
  expect(new TelegramEvent(callbackQuery).sticker).toEqual(null);
  expect(new TelegramEvent(textMessage).sticker).toEqual(null);
  expect(new TelegramEvent(stickerMessage).sticker).toEqual({
    fileId: '123',
    width: 50,
    height: 50,
  });
  expect(new TelegramEvent(replyToTextMessage).sticker).toEqual(null);
});