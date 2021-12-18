import warning from 'warning';
import { MessengerClient } from 'messaging-api-messenger';
import { mocked } from 'ts-jest/utils';

import MessengerContext from '../MessengerContext';
import MessengerEvent from '../MessengerEvent';

jest.mock('messaging-api-messenger');
jest.mock('warning');
jest.mock('delay');

const APP_ID = '1234567890';
const PERSONA_ID = '987654321';

const defaultRawEvent = {
  sender: { id: '1423587017700273' },
  recipient: { id: '404217156637689' },
  timestamp: 1491796363181,
  message: {
    mid: 'mid.$cAAE1UUyiiwthh0NPrVbVf4HFNDGl',
    seq: 348847,
    text: 'There is no royal road to learning.',
  },
};

const userSession = {
  user: {
    id: 'fakeUserId',
  },
};

const setup = (
  { session = userSession, customAccessToken, rawEvent = defaultRawEvent } = {
    session: userSession,
    customAccessToken: undefined,
    defaultRawEvent,
  }
) => {
  const client = new MessengerClient({
    accessToken: customAccessToken ?? '',
  });
  const args = {
    appId: APP_ID,
    client,
    event: new MessengerEvent(rawEvent),
    session,
    customAccessToken,
  };
  const context = new MessengerContext(args);
  return {
    context,
    session,
    client,
  };
};

it('#platform to be `messenger`', () => {
  const { context } = setup();
  expect(context.platform).toBe('messenger');
});

it('get #session works', () => {
  const { context, session } = setup();
  expect(context.session).toBe(session);
});

it('get #event works', () => {
  const { context } = setup();
  expect(context.event).toBeInstanceOf(MessengerEvent);
});

it('get #client works', () => {
  const { context, client } = setup();
  expect(context.client).toBe(client);
});

describe('#getUserProfile', () => {
  it('should call client getUserProfile', async () => {
    const { context, client, session } = setup();

    const user = {
      id: session.user.id,
      name: 'Kevin Durant',
      firstName: 'Kevin',
      lastName: 'Durant',
      profilePic: 'https://example.com/pic.png',
    };

    mocked(client.getUserProfile).mockResolvedValue(user);

    const result = await context.getUserProfile();

    expect(client.getUserProfile).toBeCalledWith(session.user.id, {});
    expect(result).toEqual(user);
  });

  it('should call client with custom fields', async () => {
    const { context, client, session } = setup();

    const user = {
      id: session.user.id,
      name: 'Kevin Durant',
      firstName: 'Kevin',
      lastName: 'Durant',
      profilePic: 'https://example.com/pic.png',
      locale: 'en_US',
      timezone: 8,
      gender: 'male',
    };

    mocked(client.getUserProfile).mockResolvedValue(user);

    const result = await context.getUserProfile({
      fields: [
        'id',
        'name',
        'first_name',
        'last_name',
        'profile_pic',
        'locale',
        'timezone',
        'gender',
      ],
    });

    expect(client.getUserProfile).toBeCalledWith(session.user.id, {
      fields: [
        'id',
        'name',
        'first_name',
        'last_name',
        'profile_pic',
        'locale',
        'timezone',
        'gender',
      ],
    });
    expect(result).toEqual(user);
  });

  it('should call warning and not to send if dont have session', async () => {
    const { context, client } = setup({ session: false });

    await context.getUserProfile();

    expect(warning).toBeCalledWith(
      false,
      'getUserProfile: should not be called in context without session'
    );
    expect(client.getUserProfile).not.toBeCalled();
  });
});

describe('Persistent Menu', () => {
  describe('#getUserPersistentMenu', () => {
    it('should call client getUserPersistentMenu', async () => {
      const { context, client, session } = setup();

      const persistentMenu = [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: 'postback',
              title: 'Restart Conversation',
              payload: 'RESTART',
            },
            {
              type: 'web_url',
              title: 'Powered by ALOHA.AI, Yoctol',
              url: 'https://www.yoctol.com/',
            },
          ],
        },
      ];

      client.getUserPersistentMenu.mockResolvedValue(persistentMenu);

      const result = await context.getUserPersistentMenu();

      expect(client.getUserPersistentMenu).toBeCalledWith(session.user.id);
      expect(result).toEqual(persistentMenu);
    });

    it('should call warning and not to send if dont have session', async () => {
      const { context, client } = setup({ session: false });

      await context.getUserPersistentMenu();

      expect(warning).toBeCalledWith(
        false,
        'getUserPersistentMenu: should not be called in context without session'
      );
      expect(client.getUserPersistentMenu).not.toBeCalled();
    });
  });

  describe('#setUserPersistentMenu', () => {
    it('should call client setUserPersistentMenu', async () => {
      const { context, client, session } = setup();

      const persistentMenu = [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: 'postback',
              title: 'Restart Conversation',
              payload: 'RESTART',
            },
            {
              type: 'web_url',
              title: 'Powered by ALOHA.AI, Yoctol',
              url: 'https://www.yoctol.com/',
            },
          ],
        },
      ];

      const result = await context.setUserPersistentMenu(persistentMenu);

      expect(client.setUserPersistentMenu).toBeCalledWith(
        session.user.id,
        persistentMenu,
        {}
      );

      expect(result).toBeUndefined();
    });

    it('should call warning and not to send if dont have session', async () => {
      const { context, client } = setup({ session: false });

      await context.setUserPersistentMenu();

      expect(warning).toBeCalledWith(
        false,
        'setUserPersistentMenu: should not be called in context without session'
      );
      expect(client.setPersistentMenu).not.toBeCalled();
    });
  });

  describe('#deleteUserPersistentMenu', () => {
    it('should call client deleteUserPersistentMenu', async () => {
      const { context, client, session } = setup();

      const result = await context