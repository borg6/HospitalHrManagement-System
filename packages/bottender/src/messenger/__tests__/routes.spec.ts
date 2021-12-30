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
    metadata: 'additional content that the caller wants to s