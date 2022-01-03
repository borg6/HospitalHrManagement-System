import path from 'path';

import { mocked } from 'ts-jest/utils';

import getBottenderConfig from '../getBottenderConfig';
import getChannelBots, { cleanChannelBots } from '../getChannelBots';

jest.mock('../../shared/getBottenderConfig');
jest.mock(
  '/Users/username/bot/index.js',
  () =>
    async function App(context) {
      await context.sendText('Hello World');
    },
  { virtual: true }
);

const pathResolve = path.resolve;

beforeEach(() => {
  const customPathResolve = jest.fn((...args) => {
    if (args[0] === 'index.js') return '/Users/username/bot/index.js';
    return pathResolve(...args);
  });
  path.resolve = customPathResolve;
  cleanChannelBots();
});

afterEach(() => {
  path.resolve = pathResolve;
});

it('be defined', () => {
  expect(getChannelBot