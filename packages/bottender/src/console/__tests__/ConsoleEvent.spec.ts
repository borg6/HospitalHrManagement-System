import ConsoleEvent from '../ConsoleEvent';

const textMessage = {
  message: {
    text: 'Hello, world',
  },
};

const payload = {
  payload: 'A_PAYLOAD',
};

it('#rawEvent', () => {
  expect(new ConsoleEvent(textMessage).rawEvent).toEqual(textMessage);
  expect(ne