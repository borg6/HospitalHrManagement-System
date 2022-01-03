import url from 'url';
import { IncomingMessage } from 'http';

import fromEntries from 'object.fromentries';
import { match } from 'path-to-regexp';

import { ChannelBot, RequestContext } from '..';

import getChannelBots from './getChannelBots';

function getChannelBotAndRequestContext(req: IncomingMessage):
  | {
      requestContext: RequestContext;
      channelBot: ChannelBot;
    }
  | undefined {
  // TODO: add proxy support in Bottender to apply X-Forwarded-Host and X-Forwarded-Proto
  // conditionally instead of replying on express.
  const hostname = (req as any).hostname || req.headers.host;
  const protocol = (req as any).protocol || 'https';

  const requestUrl = `${protocol}://${hostname}${req.url}`;

  const { pathname, searchParams } = new url.URL(requestUrl);

  const query = fromEntries(searchParams.entries());

  const channelBots = getChannelBots();
  for (let i = 0; i < channelBots.length; i++) {
