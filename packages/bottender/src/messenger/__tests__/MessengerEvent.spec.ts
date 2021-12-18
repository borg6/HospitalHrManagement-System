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
    contentIds: ['<CAMERA-EFFECT-ID>', '<