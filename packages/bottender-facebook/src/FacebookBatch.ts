import querystring from 'querystring';

import isNil from 'lodash/isNil';
import omitBy from 'lodash/omitBy';
import { MergeExclusive } from 'type-fest';
import { MessengerTypes } from 'bottender';

import * as Types from './FacebookTypes';

function formatDate(date: Date | string | undefined) {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date;
}

/**
 * Publish new comments to any object.
 *
 * @see https://developers.facebook.com/docs/graph-api/reference/v6.0/object/comments
 *
 * @param objectId - ID of the object.
 * @param comment - A comment text or a comment object.
 * @param options -
 */
function sendComment(
 