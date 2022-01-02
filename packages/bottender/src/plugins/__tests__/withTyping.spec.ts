import delay from 'delay';

import withTyping from '../withTyping';

jest.mock('delay');

function setup() {
  const context = {
    platform: 'messenger',
    typingOn: jest.fn(),
    sendText: jest.fn(),
  };
  return {
    context,
  };
}

it('should typingOn and delay with default typing', async () => {
  const { context } = setup();

  const _send = context.sendText;

  withTyping({ delay: 1000 })(context);

  await context.sendText('Hello');

  expect(context.typingOn).toBeCalled();
  expect(delay).toBeCalledWith(1000);
  expect(_send).toBeCalledWith('Hello');
});

i