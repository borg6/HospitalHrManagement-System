import path from 'path';

import { merge } from 'lodash';

import ConsoleBot from '../console/ConsoleBot';
import { Action, Bot, BottenderConfig, Plugin, getSessionStore } from '..';

import getBottenderConfig from './getBottenderConfig';

function getConsoleBot(): ConsoleBot