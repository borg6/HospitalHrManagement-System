import { EventEmitter } from 'events';

import debug from 'debug';
import invariant from 'invariant';
import pMap from 'p-map';
import { JsonObject } from 'type-fest';
import { camelcaseKeysDeep } from 'messaging-api-common';

import CacheBasedSessionStore from '../session/CacheBasedSessionStore';
import Context from '../context/Context';
import MemoryCacheStore from '../cache/MemoryCacheStore';
import Session from '../session/Session';
import SessionStore from '../session/SessionStore';
import { Action, Client, Plugin, Props, RequestContext } from '../types';
import { Event } from '../context/Event';

import { Connector } from './Connector';

type Builder<C extends Context> = {
  build: () => Action<C, any>;
};

const debugRequest = debug('bottender:request');
const debugResponse = debug('bottender:response');
const debugSessionRead = debug('bottender:session:read');
const debugSessionWrite = debug('bottender:session:write');
const debugAction = debug('bottender:action');

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

function createMemorySessionStore(): SessionStore {
  const cache = new MemoryCacheStore(500);
  return new CacheBasedSessionStore(cache, MINUTES_IN_ONE_YEAR);
}

export function run<C extends Context>(action: Action<C, any>): Action<C, any> {
  return async function Run(context: C, props: Props<C> = {}): Promise<void> {
    let nextDialog: Action<C, any> | void = action;

    /* eslint-disable no-await-in-loop */
    invariant(
      typeof nextDialog === 'function',
      'Invalid entry action. You may have forgotten to export your entry action in your `index.js` or `src/index.js`.'
    );

    // TODO: refactor this with withProps or whatever
    debugAction(`Current Action: ${nextDialog.name || 'Anonymous'}`);
    nextDialog = await nextDialog(context, props);

    while (typeof nextDialog === 'function') {
      // TODO: improve this debug helper
      debugAction(`Current Action: ${nextDialog.name || 'Anonymous'}`);
      nextDialog = await nextDialog(context, {});
    }
    /* eslint-enable no-await-in-loop */

    return nextDialog;
  };
}

type RequestHandler<B> = (
  body: B,
  requestContext?: RequestContext
) => void | Promise<void>;

export type OnRequest = (
  body: JsonObject,
  requestContext?: RequestContext
) => void;

export default class Bot<
  B extends JsonObject,
  C extends Client,
  E extends Event,
  Ctx extends Context<C, E>
> {
  _sessions: SessionStore;

  _initialized: boolean;

  _connector: Connector<B, C>;

  _handler: Action<Ctx, any> | null;

  _errorHandler: Action<Ctx, any> | null;

  _initialState: JsonObject = {};

  _plugins: Function[] = [];

  _sync: boolean;

  _emitter: EventEmitter;

  _onRequest: OnRequest | undefined;

  constructor({
    connector,
    sessionStore = createMemorySessionStore(),
    sync = false,
    onRequest,
  }: {
    connector: Connector<B, C>;
    sessionStore?