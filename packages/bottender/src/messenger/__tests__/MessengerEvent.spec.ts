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
          url: 'https://scontent.xx.fbcdn.net