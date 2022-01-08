import { RequestContext } from '../types';

export * from 'messaging-api-viber/dist/ViberTypes';
export { ViberConnectorOptions } from './ViberConnector';

export type ViberUser = {
  id: string;
  name: string;
  avatar: string;
  country: string;
  language: string;
  apiVersion: number;
};

export type Subs