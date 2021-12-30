import Context from '../../context/Context';
import MessengerContext from '../MessengerContext';
import MessengerEvent from '../MessengerEvent';
import messenger from '../routes';
import router from '../../router';
import { run } from '../../bot/Bot';

const messengerEventTextMessage = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  message: {
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
    text: 'hello, world!',
  },
});

const messengerEventAccountLinkingLinked = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  accountLinking: {
    status: 'linked',
    authorizationCode: 'PASS_THROUGH_AUTHORIZATION_CODE',
  },
});

const messengerEventAccountLinkingUnlinked = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  accountLinking: {
    status: 'unlinked',
  },
});

const messengerEventCheckoutUpdate = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
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
});

const messengerEventDelivery = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  delivery: {
    mids: ['mid.1458668856218:ed81099e15d3f4f233'],
    watermark: 1458668856253,
  },
});

const messengerEventEcho = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  message: {
    isEcho: true,
    appId: 1517776481860111,
    metadata: '<DEVELOPER_DEFINED_METADATA_STRING>',
    mid: 'mid.1457764197618:41d102a3e1ae206a38',
  },
});

const messengerEventGamePlay = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  gamePlay: {
    gameId: '<GAME-APP-ID>',
    playerId: '<PLAYER-ID>',
    contextType: 'SOLO',
    contextId: '<CONTEXT-ID>',
    score: 0,
    payload: '<PAYLOAD>',
  },
});

const messengerEventPassThreadControl = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  passThreadControl: {
    newOwnerAppId: '123456789',
    metadata: 'Additional content that the caller wants to set',
  },
});

const messengerEventTakeThreadControl = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  takeThreadControl: {
    previousOwnerAppId: '123456789',
    metadata: 'additional content that the caller wants to set',
  },
});

const messengerEventRequestThreadControl = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  requestThreadControl: {
    requestedOwnerAppId: 123456789,
    metadata: 'additional content that the caller wants to set',
  },
});

const messengerEventAppRoles = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  appRoles: {
    '123456789': ['primary_receiver'],
  },
});

const messengerEventOptin = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  optin: {
    ref: '<PASS_THROUGH_PARAM>',
    userRef: '<REF_FROM_CHECKBOX_PLUGIN>',
  },
});

const messengerEventPayment = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
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
});

const messengerEventPolicyEnforcement = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  'policy-enforcement': {
    action: 'block',
    reason:
      'The bot violated our Platform Policies (https://developers.facebook.com/policy/#messengerplatform). Common violations include sending out excessive spammy messages or being non-functional.',
  },
});

const messengerEventPostback = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  postback: {
    title: '<TITLE_FOR_THE_CTA>',
    payload: '<USER_DEFINED_PAYLOAD>',
    referral: {
      ref: '<USER_DEFINED_REFERRAL_PARAM>',
      source: '<SHORTLINK>',
      type: 'OPEN_THREAD',
    },
  },
});

const messengerEventPreCheckout = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
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
});

const messengerEventRead = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  read: {
    watermark: 1458668856253,
  },
});

const messengerEventReferral = new MessengerEvent({
  sender: {
    id: '1476077422222289',
  },
  recipient: {
    id: '707356222221168',
  },
  timestamp: 1458692752478,
  referral: {
    ref: '<REF_DATA_PASSED_IN_M.ME_PARAM>',
    source: 'SHORTLINK',
    type: 'OPEN_THREAD',
  },
});

const messengerEventStandby = new MessengerEvent(
  {
    sender: {
      id: '1476077422222289',
    },
    recipient: {
      id: '707356222221168',
    },
    timestamp: 1458692752478,
    message: {
      mid: 'mid.1457764197618:41d102a3e1ae206a38',
      text: 'hello, world!',
    },
  },
  { isStandby: true }
);

const messengerEventReactionReact = new MessengerEvent({
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