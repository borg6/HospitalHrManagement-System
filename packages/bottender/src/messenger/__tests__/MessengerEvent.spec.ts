import MessengerEvent from '../MessengerEvent';

const textMessage = {
  sender: { id: '1423587017700273' },
  recipient: { id: '404217156637689' },
  timestamp: 1491796363181,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    seq: 348847,
    text: 'Sharp tools make good work.',
  },
};

const imageMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t35.0-12/17887258_1429713783754592_1626047672_o.jpg?_nc_ad=z-m&oh=e44af5a4c973541ef56333202f160720&oe=58ECF78B',
        },
      },
    ],
  },
};

const locationMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'location',
        payload: {
          coordinates: {
            lat: 0,
            long: 0,
          },
        },
      },
    ],
  },
};

const audioMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'audio',
        payload: {
          url: 'https://example.com/bot/audios/audio.mp3',
        },
      },
    ],
  },
};

const videoMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'video',
        payload: {
          url: 'https://example.com/bot/videos/video.mp4',
        },
      },
    ],
  },
};

const fileMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'file',
        payload: {
          url: 'https://example.com/bot/files/file.doc',
        },
      },
    ],
  },
};

const fallbackMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797604411,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'fallback',
        payload: null,
        title: 'TITLE_OF_THE_URL_ATTACHMENT',
        URL: 'URL_OF_THE_ATTACHMENT',
      },
    ],
  },
};

const likeStickerMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797086506,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh05ZKlbVgkOobi32',
    seq: 348853,
    stickerId: 369239263222822,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/851557_369239266556155_759568595_n.png?_nc_ad=z-m&oh=547beb90237e24a9682810a5144c9fba&oe=5988CFDC',
          stickerId: 369239263222822,
        },
      },
    ],
  },
};

const largeLikeStickerMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797086506,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh05ZKlbVgkOobi32',
    seq: 348853,
    stickerId: 369239343222814,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/p100x100/851587_369239346556147_162929011_n.png?_nc_ad=z-m&oh=2008c832edbd2376b09a1008358b8fd9&oe=598FC1B0',
          stickerId: 369239343222814,
        },
      },
    ],
  },
};

const hugeLikeStickerMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491797086506,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh05ZKlbVgkOobi32',
    seq: 348853,
    stickerId: 369239383222810,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/p100x100/851587_369239346556147_162929011_n.png?_nc_ad=z-m&oh=2008c832edbd2376b09a1008358b8fd9&oe=598FC1B0',
          stickerId: 369239383222810,
        },
      },
    ],
  },
};

const quickReplyMessage = {
  sender: {
    id: '1423587017700273',
  },
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491798262319,
  message: {
    quickReply: {
      payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
    },
    mid: 'mid.$cAAE1UUyiiwthh2BKL1bVhsBhVxvm',
    seq: 348865,
    text: 'Red',
  },
};

export const delivery = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  delivery: {
    mids: ['mid.1458668856218:ed81099e15d3f4f233'],
    watermark: 1458668856253,
    seq: 37,
  },
};

export const read = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1458668856463,
  read: {
    watermark: 1458668856253,
    seq: 38,
  },
};

export const echoMessage = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1491798024994,
  message: {
    isEcho: true,
    appId: 205552219930699,
    mid: 'mid.$cAAE1UUyiiwthh1yrIlbVhdisQW8M',
    seq: 348859,
    text: 'Difficult the first time, easy the second.',
  },
};

const postback = {
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1491798782090,
  sender: {
    id: '1423587017700273',
  },
  postback: {
    payload: 'USER_DEFINED_PAYLOAD',
  },
};

const gamePlay = {
  sender: {
    id: 'USER_ID',
  },
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1469111400000,
  gamePlay: {
    gameId: 'GAME_ID',
    playerId: 'PLAYER_ID',
    contextType: 'SOLO',
    contextId: 'CONTEXT_ID',
    score: 99,
    payload: '{"some_key":"SOME_VALUE"}',
  },
};

const gamePlayWithNonValidPayload = {
  sender: {
    id: 'USER_ID',
  },
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1469111400000,
  gamePlay: {
    gameId: 'GAME_ID',
    playerId: 'PLAYER_ID',
    contextType: 'SOLO',
    contextId: 'CONTEXT_ID',
    score: 99,
    payload: 'SOME_STRING',
  },
};

const optin = {
  sender: {
    id: 'USER_ID',
  },
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1234567890,
  optin: {
    ref: 'PASS_THROUGH_PARAM',
  },
};

const payment = {
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1473208792799,
  sender: {
    id: 'USER_ID',
  },
  payment: {
    payload: 'DEVELOPER_DEFINED_PAYLOAD',
    requestedUserInfo: {
      shippingAddress: {},
      contactName: 'Peter Chang',
      contactEmail: 'peter@anemail.com',
      contactPhone: '+15105551234',
    },
    paymentCredential: {
      providerType: 'paypal',
      chargeId: 'ch_18tmdBEoNIH3FPJHa60ep123',
      fbPaymentId: '123456789',
    },
    amount: {
      currency: 'USD',
      amount: '29.62',
    },
    shippingOptionId: '123',
  },
};

const checkoutUpdate = {
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1473204787206,
  sender: {
    id: 'USER_ID',
  },
  checkoutUpdate: {
    payload: 'DEVELOPER_DEFINED_PAYLOAD',
    shippingAddress: {
      id: 10105655000959552,
      country: 'US',
      city: 'MENLO PARK',
      street1: '1 Hacker Way',
      street2: '',
      state: 'CA',
      postalCode: '94025',
    },
  },
};

const preCheckout = {
  recipient: {
    id: 'PAGE_ID',
  },
  timestamp: 1473204787206,
  sender: {
    id: 'USER_ID',
  },
  preCheckout: {
    payload: 'xyz',
    requestedUserInfo: {
      shippingAddress: {
        name: 'Tao Jiang',
        street1: '600 Edgewater Blvd',
        street2: '',
        city: 'Foster City',
        state: 'CA',
        country: 'US',
        postalCode: '94404',
      },
      contactName: 'Tao Jiang',
    },
    amount: {
      currency: 'USD',
      amount: '2.70',
    },
  },
};

const policyEnforcement = {
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1458692752478,
  'policy-enforcement': {
    action: 'block',
    reason:
      'The bot violated our Platform Policies (https://developers.facebook.com/policy/#messengerplatform). Common violations include sending out excessive spammy messages or being non-functional.',
  },
};

const appRoles = {
  recipient: {
    id: '404217156637689',
  },
  timestamp: 1458692752478,
  appRoles: {
    '123456789': ['automation'],
  },
};

const passThreadControl = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1458692752478,
  passThreadControl: {
    newOwnerAppId: '123456789',
    metadata: 'additional content that the caller wants to set',
  },
};

const takeThreadControl = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1458692752478,
  takeThreadControl: {
    previousOwnerAppId: '123456789',
    metadata: 'additional content that the caller wants to set',
  },
};

const requestThreadControl = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1458692752478,
  requestThreadControl: {
    requestedOwnerAppId: 123456789,
    metadata: 'additional content that the caller wants to set',
  },
};

const requestThreadControlFromInbox = {
  sender: {
    id: '404217156637689',
  },
  recipient: {
    id: '1423587017700273',
  },
  timestamp: 1458692752478,
  requestThreadControl: {
    requestedOwnerAppId: 263902037430900,
    metadata: 'additional content that the caller wants to set',
  },
};

const textMessageFromCustomerChatPlugin = {
  sender: { id: '1423587017700273' },
  recipient: { id: '404217156637689' },
  timestamp: 1491796363181,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    seq: 348847,
    text: 'Sharp tools make good work.',
    tags: [
      {
        source: 'customer_chat_plugin',
      },
    ],
  },
};

const linkReferral = {
  recipient: {
    id: '701111199441168',
  },
  timestamp: 1511111143921,
  sender: {
    id: '1476077111119289',
  },
  referral: {
    ref: 'aaaa',
    source: 'SHORTLINK',
    type: 'OPEN_THREAD',
  },
};

const postbackReferral = {
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1522222894827,
  sender: {
    id: '1476077422222289',
  },
  postback: {
    payload: '__GET_STARTED__',
    referral: {
      source: 'SHORTLINK',
      type: 'OPEN_THREAD',
      ref: 'aaaa',
    },
    title: 'Get Started',
  },
};

const customerChatPluginReferral = {
  recipient: { id: '693344444818699' },
  timestamp: 1512552044444,
  sender: { id: '1242684444404904' },
  referral: {
    ref: 'bbbb',
    source: 'CUSTOMER_CHAT_PLUGIN',
    type: 'OPEN_THREAD',
    originDomain: 'https://test.domain.tw/',
  },
};

const pageId = '137542570280111';

const brandedCamera = {
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1469111400000,
  brandedCamera: {
    contentIds: ['<CAMERA-EFFECT-ID>', '<CAMERA-EFFECT-ID>'],
    event: 'dismiss',
  },
};

const accountLinkingLinked = {
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1469111400000,
  accountLinking: {
    status: 'linked',
    authorizationCode: 'PASS_THROUGH_AUTHORIZATION_CODE',
  },
};

const accountLinkingUnlinked = {
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1469111400000,
  accountLinking: {
    status: 'unlinked',
  },
};

const reactionReact = {
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1469111400000,
  reaction: {
    reaction: 'smile',
    emoji: '\u{2764}\u{FE0F}',
    action: 'react',
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
  },
};

const reactionUnreact = {
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1469111400000,
  reaction: {
    reaction: 'smile',
    emoji: '\u{2764}\u{FE0F}',
    action: 'unreact',
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
  },
};

it('#rawEvent', () => {
  expect(new MessengerEvent(textMessage).rawEvent).toEqual(textMessage);
  expect(new MessengerEvent(imageMessage).rawEvent).toEqual(imageMessage);
  expect(new MessengerEvent(likeStickerMessage).rawEvent).toEqual(
    likeStickerMessage
  );
  expect(new MessengerEvent(quickReplyMessage).rawEvent).toEqual(
    quickReplyMessage
  );
  expect(new MessengerEvent(echoMessage).rawEvent).toEqual(echoMessage);
  expect(new MessengerEvent(postback).rawEvent).toEqual(postback);
  expect(new MessengerEvent(payment).rawEvent).toEqual(payment);
  expect(new MessengerEvent(accountLinkingLinked).rawEvent).toEqual(
    accountLinkingLinked
  );
  expect(new MessengerEvent(accountLinkingUnlinked).rawEvent).toEqual(
    accountLinkingUnlinked
  );
});

it('#timestamp', () => {
  expect(new MessengerEvent(textMessage).timestamp).toEqual(1491796363181);
  expect(new MessengerEvent(imageMessage).timestamp).toEqual(1491797604411);
  expect(new MessengerEvent(likeStickerMessage).timestamp).toEqual(
    1491797086506
  );
  expect(new MessengerEvent(quickReplyMessage).timestamp).toEqual(
    1491798262319
  );
  expect(new MessengerEvent(echoMessage).timestamp).toEqual(1491798024994);
  expect(new MessengerEvent(postback).timestamp).toEqual(1491798782090);
  expect(new MessengerEvent(payment).timestamp).toEqual(1473208792799);
  expect(new MessengerEvent(accountLinkingLinked).timestamp).toEqual(
    1469111400000
  );
  expect(new MessengerEvent(accountLinkingUnlinked).timestamp).toEqual(
    1469111400000
  );
});

it('#isMessage', () => {
  expect(new MessengerEvent(textMessage).isMessage).toEqual(true);
  expect(new MessengerEvent(imageMessage).isMessage).toEqual(true);
  expect(new MessengerEvent(likeStickerMessage).isMessage).toEqual(true);
  expect(new MessengerEvent(quickReplyMessage).isMessage).toEqual(true);
  expect(
    new MessengerEvent(textMessageFromCustomerChatPlugin).isMessage
  ).toEqual(true);
  expect(new MessengerEvent(echoMessage).isMessage).toEqual(true);
  expect(new MessengerEvent(postback).isMessage).toEqual(false);
  expect(new MessengerEvent(payment).isMessage).toEqual(false);
  expect(new MessengerEvent(accountLinkingLinked).isMessage).toEqual(false);
  expect(new MessengerEvent(accountLinkingUnlinked).isMessage).toEqual(false);
});

it('#message', () => {
  expect(new MessengerEvent(textMessage).message).toEqual({
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    seq: 348847,
    text: 'Sharp tools make good work.',
  });
  expect(new MessengerEvent(imageMessage).message).toEqual({
    mid: 'mid.$cAAE1UUyiiwthh1ZAO1bVhDxGk2N0',
    seq: 348855,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t35.0-12/17887258_1429713783754592_1626047672_o.jpg?_nc_ad=z-m&oh=e44af5a4c973541ef56333202f160720&oe=58ECF78B',
        },
      },
    ],
  });
  expect(new MessengerEvent(likeStickerMessage).message).toEqual({
    mid: 'mid.$cAAE1UUyiiwthh05ZKlbVgkOobi32',
    seq: 348853,
    stickerId: 369239263222822,
    attachments: [
      {
        type: 'image',
        payload: {
          url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/851557_369239266556155_759568595_n.png?_nc_ad=z-m&oh=547beb90237e24a9682810a5144c9fba&oe=5988CFDC',
          stickerId: 369239263222822,
        },
      },
    ],
  });
});

it('#isText', () => {
  expect(new MessengerEvent(textMessage).isText).toEqual(true);
  expect(new MessengerEvent(imageMessage).isText).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isText).toEqual(false);
});

it('#text', () => {
  expect(new MessengerEvent(textMessage).text).toEqual(
    'Sharp tools make good work.'
  );
  expect(new MessengerEvent(imageMessage).text).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).text).toEqual(null);
});

it('#hasAttachment', () => {
  expect(new MessengerEvent(textMessage).hasAttachment).toEqual(false);
  expect(new MessengerEvent(imageMessage).hasAttachment).toEqual(true);
  expect(new MessengerEvent(likeStickerMessage).hasAttachment).toEqual(true);
});

it('#attachments', () => {
  expect(new MessengerEvent(imageMessage).attachments).toEqual([
    {
      type: 'image',
      payload: {
        url: 'https://scontent.xx.fbcdn.net/v/t35.0-12/17887258_1429713783754592_1626047672_o.jpg?_nc_ad=z-m&oh=e44af5a4c973541ef56333202f160720&oe=58ECF78B',
      },
    },
  ]);
  expect(new MessengerEvent(likeStickerMessage).attachments).toEqual([
    {
      type: 'image',
      payload: {
        url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/851557_369239266556155_759568595_n.png?_nc_ad=z-m&oh=547beb90237e24a9682810a5144c9fba&oe=5988CFDC',
        stickerId: 369239263222822,
      },
    },
  ]);
  expect(new MessengerEvent(postback).attachments).toEqual(null);
});

it('#isImage', () => {
  expect(new MessengerEvent(textMessage).isImage).toEqual(false);
  expect(new MessengerEvent(locationMessage).isImage).toEqual(false);
  expect(new MessengerEvent(videoMessage).isImage).toEqual(false);
  expect(new MessengerEvent(audioMessage).isImage).toEqual(false);
  expect(new MessengerEvent(fileMessage).isImage).toEqual(false);
  expect(new MessengerEvent(fallbackMessage).isImage).toEqual(false);
  expect(new MessengerEvent(imageMessage).isImage).toEqual(true);
  expect(new MessengerEvent(likeStickerMessage).isImage).toEqual(true);
});

it('#image', () => {
  expect(new MessengerEvent(textMessage).image).toEqual(null);
  expect(new MessengerEvent(locationMessage).image).toEqual(null);
  expect(new MessengerEvent(videoMessage).image).toEqual(null);
  expect(new MessengerEvent(audioMessage).image).toEqual(null);
  expect(new MessengerEvent(fileMessage).image).toEqual(null);
  expect(new MessengerEvent(fallbackMessage).image).toEqual(null);
  expect(new MessengerEvent(imageMessage).image).toEqual({
    url: 'https://scontent.xx.fbcdn.net/v/t35.0-12/17887258_1429713783754592_1626047672_o.jpg?_nc_ad=z-m&oh=e44af5a4c973541ef56333202f160720&oe=58ECF78B',
  });
  expect(new MessengerEvent(likeStickerMessage).image).toEqual({
    stickerId: 369239263222822,
    url: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/851557_369239266556155_759568595_n.png?_nc_ad=z-m&oh=547beb90237e24a9682810a5144c9fba&oe=5988CFDC',
  });
});

it('#isAudio', () => {
  expect(new MessengerEvent(textMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(locationMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(videoMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(audioMessage).isAudio).toEqual(true);
  expect(new MessengerEvent(fileMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(fallbackMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(imageMessage).isAudio).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isAudio).toEqual(false);
});

it('#audio', () => {
  expect(new MessengerEvent(textMessage).audio).toEqual(null);
  expect(new MessengerEvent(locationMessage).audio).toEqual(null);
  expect(new MessengerEvent(videoMessage).audio).toEqual(null);
  expect(new MessengerEvent(audioMessage).audio).toEqual({
    url: 'https://example.com/bot/audios/audio.mp3',
  });
  expect(new MessengerEvent(fileMessage).audio).toEqual(null);
  expect(new MessengerEvent(fallbackMessage).audio).toEqual(null);
  expect(new MessengerEvent(imageMessage).audio).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).audio).toEqual(null);
});

it('#isVideo', () => {
  expect(new MessengerEvent(textMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(locationMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(videoMessage).isVideo).toEqual(true);
  expect(new MessengerEvent(audioMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(fileMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(fallbackMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(imageMessage).isVideo).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isVideo).toEqual(false);
});

it('#video', () => {
  expect(new MessengerEvent(textMessage).video).toEqual(null);
  expect(new MessengerEvent(locationMessage).video).toEqual(null);
  expect(new MessengerEvent(videoMessage).video).toEqual({
    url: 'https://example.com/bot/videos/video.mp4',
  });
  expect(new MessengerEvent(audioMessage).video).toEqual(null);
  expect(new MessengerEvent(fileMessage).video).toEqual(null);
  expect(new MessengerEvent(fallbackMessage).video).toEqual(null);
  expect(new MessengerEvent(imageMessage).video).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).video).toEqual(null);
});

it('#isLocation', () => {
  expect(new MessengerEvent(textMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(locationMessage).isLocation).toEqual(true);
  expect(new MessengerEvent(videoMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(audioMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(fileMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(fallbackMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(imageMessage).isLocation).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isLocation).toEqual(false);
});

it('#location', () => {
  expect(new MessengerEvent(textMessage).location).toEqual(null);
  expect(new MessengerEvent(locationMessage).location).toEqual({
    coordinates: { lat: 0, long: 0 },
  });
  expect(new MessengerEvent(videoMessage).location).toEqual(null);
  expect(new MessengerEvent(audioMessage).location).toEqual(null);
  expect(new MessengerEvent(fileMessage).location).toEqual(null);
  expect(new MessengerEvent(fallbackMessage).location).toEqual(null);
  expect(new MessengerEvent(imageMessage).location).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).location).toEqual(null);
});

it('#isFile', () => {
  expect(new MessengerEvent(textMessage).isFile).toEqual(false);
  expect(new MessengerEvent(locationMessage).isFile).toEqual(false);
  expect(new MessengerEvent(videoMessage).isFile).toEqual(false);
  expect(new MessengerEvent(audioMessage).isFile).toEqual(false);
  expect(new MessengerEvent(fileMessage).isFile).toEqual(true);
  expect(new MessengerEvent(fallbackMessage).isFile).toEqual(false);
  expect(new MessengerEvent(imageMessage).isFile).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isFile).toEqual(false);
});

it('#file', () => {
  expect(new MessengerEvent(textMessage).file).toEqual(null);
  expect(new MessengerEvent(locationMessage).file).toEqual(null);
  expect(new MessengerEvent(videoMessage).file).toEqual(null);
  expect(new MessengerEvent(audioMessage).file).toEqual(null);
  expect(new MessengerEvent(fileMessage).file).toEqual({
    url: 'https://example.com/bot/files/file.doc',
  });
  expect(new MessengerEvent(fallbackMessage).file).toEqual(null);
  expect(new MessengerEvent(imageMessage).file).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).file).toEqual(null);
});

it('#isFallback', () => {
  expect(new MessengerEvent(textMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(locationMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(videoMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(audioMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(fileMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(fallbackMessage).isFallback).toEqual(true);
  expect(new MessengerEvent(imageMessage).isFallback).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isFallback).toEqual(false);
});

it('#fallback', () => {
  expect(new MessengerEvent(textMessage).fallback).toEqual(null);
  expect(new MessengerEvent(locationMessage).fallback).toEqual(null);
  expect(new MessengerEvent(videoMessage).fallback).toEqual(null);
  expect(new MessengerEvent(audioMessage).fallback).toEqual(null);
  expect(new MessengerEvent(fileMessage).fallback).toEqual(null);
  expect(new MessengerEvent(fallbackMessage).fallback).toEqual({
    URL: 'URL_OF_THE_ATTACHMENT',
    payload: null,
    title: 'TITLE_OF_THE_URL_ATTACHMENT',
    type: 'fallback',
  });
  expect(new MessengerEvent(imageMessage).fallback).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).fallback).toEqual(null);
});

it('#isSticker', () => {
  expect(new MessengerEvent(textMessage).isSticker).toEqual(false);
  expect(new MessengerEvent(imageMessage).isSticker).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isSticker).toEqual(true);
  expect(new MessengerEvent(largeLikeStickerMessage).isSticker).toEqual(true);
  expect(new MessengerEvent(hugeLikeStickerMessage).isSticker).toEqual(true);
});

it('#sticker', () => {
  expect(new MessengerEvent(textMessage).sticker).toEqual(null);
  expect(new MessengerEvent(imageMessage).sticker).toEqual(null);
  expect(new MessengerEvent(likeStickerMessage).sticker).toEqual(
    369239263222822
  );
  expect(new MessengerEvent(largeLikeStickerMessage).sticker).toEqual(
    369239343222814
  );
  expect(new MessengerEvent(hugeLikeStickerMessage).sticker).toEqual(
    369239383222810
  );
});

it('#isLikeSticker', () => {
  expect(new MessengerEvent(textMessage).isLikeSticker).toEqual(false);
  expect(new MessengerEvent(imageMessage).isLikeSticker).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isLikeSticker).toEqual(true);
  expect(new MessengerEvent(largeLikeStickerMessage).isLikeSticker).toEqual(
    true
  );
  expect(new MessengerEvent(hugeLikeStickerMessage).isLikeSticker).toEqual(
    true
  );
});

it('#isQuickReply', () => {
  expect(new MessengerEvent(textMessage).isQuickReply).toEqual(false);
  expect(new MessengerEvent(imageMessage).isQuickReply).toEqual(false);
  expect(new MessengerEvent(likeStickerMessage).isQuickReply).toEqual(false);
  expect(new MessengerEvent(quickReplyMessage).isQuickReply).toEqual(true);
  expect(new MessengerEvent(echoMessage).isQuickReply).toEqual(false);
});

it('#quickReply', () => {
  expect(new MessengerEvent(quickReplyMessage).quickReply).toEqual({
    payload: 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED',
  });
  expect(new MessengerEvent(postback).quickReply).toEqual(null);
});

it('#isDelivery', () => {
  expect(new MessengerEvent(textMessage).isDelivery).toEqual(false);
  expect(new MessengerEvent(delivery).isDelivery).toEqual(true);
  expect(new MessengerEvent(read).isDelivery).toEqual(false);
  expect(new MessengerEvent(echoMessage).isDelivery).toEqual(false);
  expect(new MessengerEvent(postback).isDelivery).toEqual(false);
  expect(new MessengerEvent(payment).isDelivery).toEqual(false);
  expect(new MessengerEvent(accountLinkingLinked).isDelivery).toEqual(false);
  expect(new MessengerEvent(accountLinkingUnlinked).isDelivery).toEqual(false);
});

it('#delivery', () => {
  expect(new MessengerEvent(textMessage).delivery).toEqual(null);
 