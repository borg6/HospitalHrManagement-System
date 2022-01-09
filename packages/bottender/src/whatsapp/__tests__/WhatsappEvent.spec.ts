
import WhatsappEvent from '../WhatsappEvent';
import {
  MediaMessageReceived,
  MessageDelivered,
  MessageRead,
  MessageSent,
  TextMessageReceived,
} from '../WhatsappTypes';

const textMessageReceived: TextMessageReceived = {
  smsMessageSid: 'SM7cd85aed706d25735d1c8019234XXXXX',
  numMedia: '0',
  smsSid: 'SM7cd85aed706d25735d1c8019234XXXXX',
  smsStatus: 'received',
  body: 'hi',
  to: 'whatsapp:+14155238886',
  numSegments: '1',
  messageSid: 'SM7cd85aed706d25735d1c8019234XXXXX',
  accountSid: 'ACf19dfb164f82b2c9d6178c6ada3XXXXX',
  from: 'whatsapp:+886123456789',
  apiVersion: '2010-04-01',
};

const imageMessageReceived: MediaMessageReceived = {
  mediaContentType0: 'image/jpeg',
  smsMessageSid: 'MMad0463f6e2a946b3fc91d9a04a2XXXXX',
  numMedia: '1',
  smsSid: 'MMad0463f6e2a946b3fc91d9a04a2XXXXX',
  smsStatus: 'received',
  body: 'xd',
  to: 'whatsapp:+14155238886',
  numSegments: '1',
  messageSid: 'MMad0463f6e2a946b3fc91d9a04a2XXXXX',
  accountSid: 'ACf19dfb164f82b2c9d6178c6ada3XXXXX',
  from: 'whatsapp:+886123456789',
  mediaUrl0:
    'https://api.twilio.com/2010-04-01/Accounts/ACf19dfb164f82b2c9d6178c6ada3XXXXX/Messages/MMad0463f6e2a946b3fc91d9a04a2XXXXX/Media/MEfaf3decca478ebeb4924fe523ff7fdb2',
  apiVersion: '2010-04-01',
};

const messageSent: MessageSent = {
  smsSid: 'SM338ac551ecd04d698821b50ea5dXXXXX',
  smsStatus: 'sent',
  messageStatus: 'sent',
  channelToAddress: '+886123456789',
  to: 'whatsapp:+886123456789',
  channelPrefix: 'whatsapp',
  messageSid: 'SM338ac551ecd04d698821b50ea5dXXXXX',
  accountSid: 'ACf19dfb164f82b2c9d6178c6ada3XXXXX',
  structuredMessage: 'false',
  from: 'whatsapp:+14155238886',
  apiVersion: '2010-04-01',
  channelInstallSid: 'XEcc20d939f803ee381f2442185d0XXXXX',
};

const messageDelivered: MessageDelivered = {
  eventType: 'DELIVERED',
  smsSid: 'SM338ac551ecd04d698821b50ea5dXXXXX',
  smsStatus: 'delivered',
  messageStatus: 'delivered',
  channelToAddress: '+886123456789',
  to: 'whatsapp:+886123456789',
  channelPrefix: 'whatsapp',
  messageSid: 'SM338ac551ecd04d698821b50ea5dXXXXX',
  accountSid: 'ACf19dfb164f82b2c9d6178c6ada3XXXXX',
  from: 'whatsapp:+14155238886',
  apiVersion: '2010-04-01',
  channelInstallSid: 'XE85c014c372541a32e1102eb1631XXXXX',
};

const messageRead: MessageRead = {
  eventType: 'READ',
  smsSid: 'SM338ac551ecd04d698821b50ea5dXXXXX',
  smsStatus: 'read',
  messageStatus: 'read',