import warning from 'warning';
import { ViberClient, ViberTypes } from 'messaging-api-viber';

import Context from '../context/Context';

import ViberEvent from './ViberEvent';

class ViberContext extends Context<ViberClient, ViberEvent> {
  /**
   * The name of the platform.
   *
   */
  get platform(): 'viber' {
    return 'viber';
  }

  /**
   * Send text to the owner of the session.
   *
   */
  async sendText(
    text: string,
    options?: ViberTypes.MessageOptions
  ): Promise<any> {
    if (!this._session) {
      warning(
        false,
        'sendText: should not be called in context without session'
      );
      return;
    }

    return this._client.sendText(this._session.user.id, text, options);
  }

  /**
   * Get user details from the owner of the session.
   *
   */
  async getUserDetails(): Promise<ViberTypes.UserDetails | null> {
    if (!this._session) {
      warning(
        false,
        'getUserDetails: should not be called in context without session'
      );
      return null;
    }

    return this._client.getUserDetails(this._session.user.id);
  }

  /**
   * Get user online status from the owner o