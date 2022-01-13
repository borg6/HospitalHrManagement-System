import nock from 'nock';
import { Context, chain } from 'bottender';
// FIXME: export public API for testing
import { run } from 'bottender/dist/bot/Bot';

import rasa from '..';

// FIXME: export public test-utils for testing
class TestContext extends Context {
  get platform() {
    return 'test';
  }

  sendText = jest.fn();
}

function setup({
  event = {
    isMessage: true,
    isText: true,
    text: 'text',
    message: {
      id: '1',
      text: 'text',
    },
    rawEvent: {
      message: {
        id: '1',
        text: 'text',
      },
    },
  },
} = {}) {
  const context = new TestContext({
