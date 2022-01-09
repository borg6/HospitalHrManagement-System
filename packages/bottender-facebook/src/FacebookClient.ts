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
              totalCount: number;
              canComment: boolean;
            };
          }
        : any)
  > {
    const conjunctFields = Array.isArray(fields) ? fields.join(',') : fields;

    return this.axios
      .get<
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
                  totalCount: number;
                  canComment: boolean;
                };
              }
            : any)
      >(`/${objectId}/comments`, {
        params: {
          limit,
          summary: summary ? 'true' : undefined,
          filter,
          order,
          fields: conjunctFields,
          access_token: this.accessToken,
        },
      })
      .then((res) => res.data, handleError);
  }

  /**
   * Get the data of likes on the object.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/object/likes
   *
   * @param objectId - ID of the comment.
   * @param options -
   */
  public getLikes(
    objectId: string,
    { summary }: Types.GetLikesOptions = {}
  ): Promise<Types.Likes> {
    return this.axios
      .get<{
        id: string;
        likes: Types.Likes;
      }>(`/${objectId}/likes`, {
        params: {
          summary: summary ? 'true' : undefined,
          access_token: this.accessToken,
        },
      })
      .then((res) => res.data.likes, handleError);
  }

  /**
   * Get metrics for pages.
   *
   * @see https://developers.facebook.com/docs/graph-api/reference/v7.0/insights
   *
   * @param options -
   */
  public getPageInsights<
    D extends (
      | ({
          id: string;
          title: string;
          description: string;
          period: P;
        } & {
          name: Exclude<
            P extends 'day'
              ? Types.PageInsightsMetricDay
              : P extends 'week'
              ? Types.PageInsightsMetricWeek
              : P extends 'days_28'
              ? Types.PageInsightsMetricDays28
              : never,
            | 'page_tab_views_login_top_unique'
            | 'page_tab_views_login_top'
            | 'page_tab_views_logout_top'
            | 'page_negative_feedback_by_type'
            | 'page_positive_feedback_by_type'
            | 'page_fans_by_like_source'
            | 'page_fans_by_like_source_unique'
            | 'page_fans_by_unlike_source_unique'
            | 'page_fans_by_unlike_source'
            | 'page_content_activity_by_action_type_unique'
            | 'page_content_activity_by_action_type'
          >;
          values: {
            value: number;
            endTime: string;
          }[];
        })
      | {
          name:
            | 'page_tab_views_login_top_unique'
            | 'page_tab_views_login_top'
            | 'page_tab_views_logout_top';
          values: {
            value: {
              allactivity?: number;
              app?: number;
              info?: number;
              insights?: number;
              likes?: number;
              locations?: number;
              photos?: number;
              photosAlbums?: number;
              photosStream?: number;
              profile?: number;
              profileInfo?: number;
              profileLikes?: number;
              profilePhotos?: number;
              timeline?: number;
              events?: number;
              videos?: number;
              wall?: number;
              tabHome?: number;
              reviews?: number;
              about?: number;
              profileHome?: number;
              profileVideos?: number;
              profilePosts?: number;
              community?: number;
              posts?: number;
              home?: number;
            };
            endTime: string;
          }[];
        }
      | {
          name: 'page_negative_feedback_by_type';
          values: {
            valu