import subMinutes from 'date-fns/subMinutes';
import { MongoClient } from 'mongodb';

import MongoSessionStore from '../MongoSessionStore';

jest.mock('mongodb');

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

function setup(options = {}) {
  const sessions = {
    findOne: jest.fn(),
    updateOne: jest.fn(),
    remove: jest.fn(),
  };
  const connection = {
    collection: jest.fn(() => sessions),
  };
  const client = {
    db: jest.fn(() => connection),
  };
  MongoClient.connect.mockResolvedValue(client);

  const store = new MongoSessionStore(
    { url: 'mongodb://fakemongourl', ...options },
    MINUTES_IN_ONE_YEAR
  );

  return {
    store,
    connection,
    sessions,
  };
}

it('should be instanceof MongoSessionStore', () => {
  expect(
    new MongoSessionStore('mongodb://fakemongourl', MINUTES_IN_ONE_YEAR)
  ).toBeInstanceOf(MongoSessionStore);
  expect(
    new MongoSessionStore(
      { url: 'mongodb://fakemongourl' },
      MINUTES_IN_ONE_YEAR
    )
  ).toBeInstanceOf(MongoSessionStore);
});

describe('#init', () => {
  it('should return initialize store instance', async () => {
    const { store } = setup();

    expect(await store.init()).toBe(store);
  });

  it('should connect to provided url', async () => {
    const { store } = setup();

    await store.init();
    expect(MongoClient.connect).toBeCalledWith('mongodb://fakemongourl', {
      useUnifiedTopology: true,
    });
  });
});

describe('#read', () => {
  it('should call findOne with platform and id', async () => {
    const { store, sessions } = setup();
    const sess = { lastActivity: Date.now() };
    sessions.findOne.mockResolvedValue(sess);

    await store.init();

    expect(await store.read('messenger:1')).toBe(sess);
    expect(sessions.findOne).toBeCalledWith({
      id: 'messenger:1',
    });
  });

  it('should return null when document not found', async () => {
    const { store, sessions } = setup();
    sessions.findOne.mockResolvedValue(null);

    await store.init();

    expect(await store.read('messenger:1')).toBeNull();
    expect(sessions.findOne).toBeCalledWith({
      id: 'messenger:1',
    });
  });

  it('should return null when seesion expires', async () => {
    const { store, sessions } = setup();
    const sess = {
      lastActivity: subMinutes(Date.now(), MINUTES_IN_ONE_YEAR + 1),
    };
    sessions.findOne.mockResolvedValue(sess);

    await store.init();

    expect(await store.read('messenger:1')).toBeNull();
    expect(sessions.findOne).toBeCalledWith({
      id: 'messenger:1',
    });
  });

  it('should log Error when call read before init', async () => {
    console.error = jest.fn();
    const { store, sessions } = setup();
    const sess = {
      lastActivity: subMinutes(Date.now(), MINUTES_IN_ONE_YEAR + 1),
    };
    sessions.findOne.mockResolvedValue(sess);

    await store.read('messenger:1');

    expect(console.error).toBeCalledWith(
      Error('MongoSessionStore: must call `init` before any operation.')
    );
  });
});

describe('#all', () => {
  i