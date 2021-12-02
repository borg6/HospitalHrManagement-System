import fs from 'fs';
import path from 'path';

import ngrok from 'ngrok';
import nodemon from 'nodemon';

import getBottenderConfig from '../../../shared/getBottenderConfig';
import { CliContext } from '../..';

import getSubArgs from './utils/getSubArgs';

const dev = async (ctx: CliContext): Promise<void> => {
  const argv = getSubArgs(ctx.argv, {
    '--console': Boolean,
    '--port': Number,
    '--inspect': String,

    // Aliases
    '-c': '--console',
    '-p': '--port',
  });

  const isConsole = argv['--console'] || false;
  const port = argv['--port'] || process.env.PORT || 5000;
  const inspectionUrl = argv['--inspect'];

  const config = getBottenderConfig();

  const { channels } = config;

  let isTypescript = false;
  try {
    isTypescript = Boolean(fs.statSync(path.resolve('tsconfig.json')).isFile);
  } catch {
    // fs.statSync may throw an ENOENT error when file is not found, so keep isTypescript false
  }

  // watch
  nodemon(
    [
      inspectionUrl ? `--inspect=${inspectionUrl} -- ` : '',
      isTypescript ? '--ext js,mjs,js