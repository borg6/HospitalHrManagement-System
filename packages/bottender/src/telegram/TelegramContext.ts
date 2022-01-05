
import warning from 'warning';
import { TelegramClient } from 'messaging-api-telegram';

import Context from '../context/Context';

import TelegramEvent from './TelegramEvent';
import * as Type from './TelegramTypes';

class TelegramContext extends Context<TelegramClient, TelegramEvent> {
  /**
   * The name of the platform.
   *
   */
  get platform(): 'telegram' {
    return 'telegram';
  }

  /**
   * Send text to the owner of then session.
   *
   */
  async sendText(
    text: string,
    options?: Type.SendMessageOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendText: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendText: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendMessage(chatId, text, options);
  }

  /**
   * Send text to the owner of then session.
   *
   */
  async sendMessage(
    text: string,
    options?: Type.SendMessageOption
  ): Promise<Type.Message | null> {
    return this.sendText(text, options);
  }

  _getChatId(): number | null {
    if (this._event.isMessage) {
      return (this._event.message as any).chat.id;
    }
    if (this._event.isEditedMessage) {
      return (this._event.editedMessage as any).chat.id;
    }
    if (this._event.isChannelPost) {
      return (this._event.channelPost as any).chat.id;
    }
    if (this._event.isEditedChannelPost) {
      return (this._event.editedChannelPost as any).chat.id;
    }
    if (this._event.isInlineQuery) {
      return (this._event.inlineQuery as any).from.id;
    }
    if (this._event.isChosenInlineResult) {
      return (this._event.chosenInlineResult as any).from.id;
    }
    if (
      this._event.isCallbackQuery &&
      (this._event.callbackQuery as any).message
    ) {
      return (this._event.callbackQuery as any).message.chat.id;
    }
    if (this._event.isShippingQuery) {
      return (this._event.shippingQuery as any).from.id;
    }
    if (this._event.isPreCheckoutQuery) {
      return (this._event.preCheckoutQuery as any).from.id;
    }
    if (this._session) {
      return this._session.user.id;
    }
    return null;
  }

  async answerShippingQuery(
    ok: boolean,
    options?: Type.AnswerShippingQueryOption
  ): Promise<boolean | null> {
    if (!this._event.isShippingQuery) {
      warning(
        false,
        'answerShippingQuery: should only be called to answer ShippingQuery event'
      );
      return null;
    }

    const shippingQueryId = (this._event.shippingQuery as any).id;

    return this._client.answerShippingQuery(shippingQueryId, ok, options);
  }

  async answerPreCheckoutQuery(
    ok: boolean,
    options?: Type.AnswerPreCheckoutQueryOption
  ): Promise<boolean | null> {
    if (!this._event.isPreCheckoutQuery) {
      warning(
        false,
        'answerPreCheckoutQuery: should only be called to answer PreCheckoutQuery event'
      );
      return null;
    }

    const preCheckoutQueryId = (this._event.preCheckoutQuery as any).id;

    return this._client.answerPreCheckoutQuery(preCheckoutQueryId, ok, options);
  }

  async answerInlineQuery(
    results: Type.InlineQueryResult[],
    options?: Type.AnswerInlineQueryOption
  ): Promise<boolean | null> {
    if (!this._event.isInlineQuery) {
      warning(
        false,
        'answerInlineQuery: should only be called to answer InlineQuery event'
      );
      return null;
    }

    const inlineQueryId = (this._event.inlineQuery as any).id;

    return this._client.answerInlineQuery(inlineQueryId, results, options);
  }

  async answerCallbackQuery(
    options: Type.AnswerCallbackQueryOption
  ): Promise<boolean | null> {
    if (!this._event.isCallbackQuery) {
      warning(
        false,
        'answerCallbackQuery: should only be called to answer CallbackQuery event'
      );
      return null;
    }

    const callbackQueryId = (this._event.callbackQuery as any).id;

    return this._client.answerCallbackQuery(callbackQueryId, options);
  }

  async getUserProfilePhotos(
    options?: Type.GetUserProfilePhotosOption
  ): Promise<Type.UserProfilePhotos | null> {
    if (!this._session) {
      warning(
        false,
        'getUserProfilePhotos: should not be called in context without session'
      );
      return null;
    }

    return this._client.getUserProfilePhotos(
      (this.session as any).user.id,
      options
    );
  }

  async getChat(): Promise<Type.Chat | null> {
    if (!this._session) {
      warning(
        false,
        'getChat: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(false, 'getChat: should not be called in context without chatId');
      return null;
    }

    return this._client.getChat(chatId);
  }

  async getChatAdministrators(): Promise<Type.ChatMember[] | null> {
    if (!this._session) {
      warning(
        false,
        'getChatAdministrators: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'getChatAdministrators: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.getChatAdministrators(chatId);
  }

  async getChatMembersCount(): Promise<number | null> {
    if (!this._session) {
      warning(
        false,
        'getChatMembersCount: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'getChatMembersCount: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.getChatMembersCount(chatId);
  }

  async getChatMember(userId: number): Promise<Type.ChatMember | null> {
    if (!this._session) {
      warning(
        false,
        'getChatMember: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'getChatMember: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.getChatMember(chatId, userId);
  }

  async getGameHighScores(
    options?: Type.GetGameHighScoresOption
  ): Promise<Type.GameHighScore[] | null> {
    if (!this._session) {
      warning(
        false,
        'getGameHighScores: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'getGameHighScores: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.getGameHighScores(chatId, options);
  }

  async editMessageText(
    messageId: number,
    text: string,
    options?: Type.EditMessageTextOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'editMessageText: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'editMessageText: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.editMessageText(text, {
      chatId,
      messageId,
      ...options,
    });
  }

  async editMessageCaption(
    messageId: number,
    caption: string,
    options?: Type.EditMessageCaptionOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'editMessageCaption: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'editMessageCaption: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.editMessageCaption(caption, {
      chatId,
      messageId,
      ...options,
    });
  }

  async editMessageMedia(
    messageId: number,
    media: Type.InputMedia,
    options?: Type.EditMessageMediaOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'editMessageMedia: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'editMessageMedia: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.editMessageMedia(media, {
      chatId,
      messageId,
      ...options,
    });
  }

  async editMessageReplyMarkup(
    messageId: number,
    replyMarkup: Type.InlineKeyboardMarkup,
    options?: Type.EditMessageReplyMarkupOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'editMessageReplyMarkup: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'editMessageReplyMarkup: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.editMessageReplyMarkup(replyMarkup, {
      chatId,
      messageId,
      ...options,
    });
  }

  async deleteMessage(messageId: number): Promise<boolean | null> {
    if (!this._session) {
      warning(
        false,
        'deleteMessage: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'deleteMessage: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.deleteMessage(chatId, messageId);
  }

  async editMessageLiveLocation(
    messageId: number,
    location: Type.Location,
    options?: Type.EditMessageLiveLocationOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'editMessageLiveLocation: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'editMessageLiveLocation: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.editMessageLiveLocation(location, {
      chatId,
      messageId,
      ...options,
    });
  }

  async stopMessageLiveLocation(
    messageId: number,
    options?: Type.StopMessageLiveLocationOption
  ): Promise<Type.Message | boolean | null> {
    if (!this._session) {
      warning(
        false,
        'stopMessageLiveLocation: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'stopMessageLiveLocation: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.stopMessageLiveLocation({
      chatId,
      messageId,
      ...options,
    });
  }

  async forwardMessageFrom(
    fromChatId: string,
    messageId: number,
    options?: Type.ForwardMessageOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'forwardMessageFrom: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'forwardMessageFrom: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.forwardMessage(chatId, fromChatId, messageId, options);
  }

  async forwardMessageTo(
    toChatId: string,
    messageId: number,
    options?: Type.ForwardMessageOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'forwardMessageTo: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'forwardMessageTo: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.forwardMessage(toChatId, chatId, messageId, options);
  }

  // Send API
  async sendPhoto(
    photo: string,
    options?: Type.SendPhotoOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendPhoto: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendPhoto: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendPhoto(chatId, photo, options);
  }

  async sendAudio(
    audio: string,
    options?: Type.SendAudioOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendAudio: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendAudio: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendAudio(chatId, audio, options);
  }

  async sendDocument(
    document: string,
    options?: Type.SendDocumentOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendDocument: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendDocument: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendDocument(chatId, document, options);
  }

  async sendSticker(
    sticker: string,
    options?: Type.SendStickerOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendSticker: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendSticker: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendSticker(chatId, sticker, options);
  }

  async sendVideo(
    video: string,
    options?: Type.SendVideoOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendVideo: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendVideo: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendVideo(chatId, video, options);
  }

  async sendAnimation(
    animation: string,
    options?: Type.SendAnimationOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendAnimation: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendAnimation: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendAnimation(chatId, animation, options);
  }

  async sendVoice(
    voice: string,
    options?: Type.SendVoiceOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendVoice: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendVoice: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendVoice(chatId, voice, options);
  }

  async sendVideoNote(
    videoNote: string,
    options?: Type.SendVideoNoteOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,
        'sendVideoNote: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendVideoNote: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendVideoNote(chatId, videoNote, options);
  }

  async sendMediaGroup(
    media: (Type.InputMediaPhoto | Type.InputMediaVideo)[],
    options?: Type.SendMediaGroupOption
  ): Promise<Type.Message[] | null> {
    if (!this._session) {
      warning(
        false,
        'sendMediaGroup: should not be called in context without session'
      );
      return null;
    }

    const chatId = this._getChatId();

    if (chatId === null) {
      warning(
        false,
        'sendMediaGroup: should not be called in context without chatId'
      );
      return null;
    }

    return this._client.sendMediaGroup(chatId, media, options);
  }

  async sendLocation(
    { latitude, longitude }: { latitude: number; longitude: number },
    options?: Type.SendLocationOption
  ): Promise<Type.Message | null> {
    if (!this._session) {
      warning(
        false,