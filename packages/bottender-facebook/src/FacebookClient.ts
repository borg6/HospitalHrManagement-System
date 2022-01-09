import AxiosError from 'axios-error';
import get from 'lodash/get';
import { MergeExclusive } from 'type-fest';
import { MessengerClient } from 'bottender';

import * as Types from './FacebookTypes';

function handleError(err: AxiosError): never {
  if (err.response && err.response.data) {
    const error = get(err, 'response.data.error');
    if (error) {
      const msg = `Facebook API - ${error.code} ${error.type} ${error.message}`;
      throw new AxiosError(msg, err);
    }
  }
  throw new AxiosError(err.message, err);
}

export default class FacebookClient extends MessengerClient {
  /**
   * Publish new comments to any object.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/object/comments
   *
   * @param objectId - ID of the object.
   * @param comment - A comment text or a comment object.
   * @param options -
   */
  public sendComment(
    objectId: string,
    comment: string | Types.InputComment
  ): Promise<{ id: string }> {
    const body = typeof comment === 'string' ? { message: comment } : comment;

    return this.axios
      .post<{ id: string }>(`/${objectId}/comments`, body, {
        params: {
          access_token: this.accessToken,
        },
      })
      .then((res) => res.data, handleError);
  }

  /**
   * Add new likes to any object.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/object/likes
   *
   * @param objectId - ID of the object.
   */
  public sendLike(objectId: string): Promise<{ success: true }> {
    return this.axios
      .post<{ success: true }>(`/${objectId}/likes`, undefined, {
        params: {
          access_token: this.accessToken,
        },
      })
      .then((res) => res.data, handleError);
  }

  /**
   * Get the data of the comment.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/comment
   *
   * @param commentId - ID of the comment.
   * @param options -
   */
  public getComment<
    T extends Types.CommentField = 'id' | 'message' | 'created_time'
  >(
    commentId: string,
    {
      fields = ['id' as T, 'message' as T, 'created_time' as T],
    }: { fields?: T[] } = {}
  ): Promise<
    Pick<
      Types.Comment,
      Types.CamelCaseUnion<Types.CommentKeyMap, typeof fields[number]>
    >
  > {
    const conjunctFields = Array.isArray(fields) ? fields.join(',') : fields;

    return this.axios
      .get<
        Pick<
          Types.Comment,
          Types.CamelCaseUnion<Types.CommentKeyMap, typeof fields[number]>
        >
      >(`/${commentId}`, {
        params: {
          fields: conjunctFields,
          access_token: this.accessToken,
        },
      })
      .then((res) => res.data, handleError);
  }

  /**
   * Get comments of the object.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/v7.0/object/comments
   *
   * @param objectId - ID of the object.
   * @param options -
   */
  public getComments<
    T extends Types.CommentField = 'id' | 'message' | 'created_time',
    U extends boolean = false
  >(
    objectId: string,
    {
      limit,
      summary,
      filter,
      order,
      fields = ['id' as T, 'message' as T, 'created_time' as T],
    }: Types.GetCommentsOptions<T, U> = {}
  ): Promise<
    Types.PagingData<
      Pick<
        Types.Comment,
        Types.CamelCaseUnion<Types.CommentKeyMap, typeof fields[number]>
      >[]
    > &
      (U extends true
        ? {
            summary: {
              order: 'ranked' | 'chronological' | 'reverse_chronological';
        