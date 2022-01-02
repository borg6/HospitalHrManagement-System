import CacheBasedSessionStore from '../CacheBasedSessionStore';

const expiresIn = 10;

function setup() {
  const cache = {
    get: jest.fn(),
    all: jest.fn(),
    put: jest.fn(),
    forget: jest.fn(),
    flush: jest.fn(),
    getPrefix: jest.fn(),
  };

  const store = new CacheBasedSessionStore(cache, expiresIn);
  return {
    store,
    cache,
  };
}

describe('#init', () => {
  it('should return initialize store instance', async () => {
    const { store } = setup();

    expect(await store.init()).toBe(store);
  });
});

describe('#read', () => {
  it('should call cache get with key', async () => {
    const { store, cache } = setup();
    await store.init();

    cache.get.mockResolvedValue({ x: 1 });

    expect(await store.read('yoctol:1')).toEqual({ x: 1 });
    expect(cache.get).toBeCalledWith('yoctol:1');
  });
});

describe('#all', () => {
  it('should call cache all and return all values', async () => {
    const { store, cache } = setup();
    await store.init();

    cache.all.mockResolvedValue([{ id: 2 }, { id: 3 }, { id: 4 }]);

    const result = await store.all();

    expect(result).toEqual([{ id: 2 }, { id: 3 }, { id: 4 }]);
    expect(cache.all).toBeCalled();
  });
});

describe('#write', () => {
  it('should call cache put w