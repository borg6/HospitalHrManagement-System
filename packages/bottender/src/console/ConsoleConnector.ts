import { EventEmitter } from 'events';

import { JsonObject } from 'type-fest';

import Session from '../session/Session';
import { Connector } from '../bot/Connector';
import { RequestContext } from '../types';

import ConsoleContext from './ConsoleContext';
import ConsoleEvent, { ConsoleRawEvent } from './ConsoleEvent';
import { ConsoleClient } from './ConsoleClient';

type ConsoleRequestBody = Conso