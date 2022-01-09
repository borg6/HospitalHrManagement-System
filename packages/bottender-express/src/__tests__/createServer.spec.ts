import request from 'supertest';

import createServer from '../createServer';

function setup({ platform }) {
  const requestHandler = jest.fn();
  const bot = {
    createRequestHandler: () => requestHandler,
    connector: {
      platform,
      verifyToken: '1qaz2wsx',
      verifySignature: jest.fn(),
      preprocess: jest.fn(),
    },
  };
  return {
    bot,
    requestHandler,
  };
}

it('should respond accordingly if shouldNext = false', async () 