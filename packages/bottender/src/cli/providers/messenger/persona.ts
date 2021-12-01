/* eslint-disable consistent-return */
import Table from 'cli-table3';
import chalk from 'chalk';
import invariant from 'invariant';
import { MessengerClient } from 'messaging-api-messenger';

import getChannelConfig from '../../../shared/getChannelConfig';
import getSubArgs from '../sh/utils/getSubArgs';
import { Channel } from '../../../types';
import { CliContext } from '../..';
import { bold, error, print } from '../../../shared/log';

const help = () => {
  console.log(`
  bottender messenger persona <command> [option]

  ${chalk.dim('Commands:')}

    list              List all personas.
    create            Create a new persona with name and profile picture URL.
    get               Get persona by persona ID.
    del, delete       Delete persona by persona ID.

  ${chalk.dim('Options:')}

    --name            Specify persona's name when create
    --pic             Specify persona's profile image URL when create
    --id              Specify persona's ID to get or delete

  ${chalk.dim('Examples:')}

  ${chalk.dim('-')} Create a new persona

    ${chalk.cyan(
      '$ bottender messenger persona create --name <PERSONA_NAME> --pic <PROFILE_IMAGE_URL>'
    )}

  ${chalk.dim('-')} Get persona by ID

    ${chalk.cyan('$ bottender messenger persona get --id <PERSONA_ID>')}

  ${chalk.dim('-')} Delete persona with specific access token

    ${chalk.cyan('$ bottender messenger persona delete --id <PERSONA_ID>')}
`);
