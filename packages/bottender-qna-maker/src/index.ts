import axios from 'axios';
import invariant from 'invariant';
import { Action, Context } from 'bottender';

import { MetadataDTO, QnaSearchResultList } from './types';

// https://docs.microsoft.com/en-us/azure/cognitive-services/qnamaker/concepts/confidence-score#choose-a-score-threshold
// The recommended threshold that should work for most KBs, is 50.
const RECOMMENDED_THRESHOLD = 50;

/**
 * @example
 * ```
 * const QnaMaker = qnaMaker({
 *   resourceName: 'RESOURCE_NAME',
 *   knowledgeBaseId: 'KNOWLEDGE_BASE_ID',
 *   endpointKey: 'ENDPOINT_KEY',
 *   scoreThreshold: 70,
 * });
 * ```
 */
export = function qnaMaker({
  resourceName,
  knowledgeBaseId,
  endpointKey,
  isTest,
  qnaId,
  scoreThreshold = RECOMMENDED_THRESHOLD,
  strictFilters,
}: {
  resourceName: string;
  knowledgeBaseId: string;
  endpointKey: string;
  isTest?: string;
  qnaId?: string;
  scoreThreshold?: number;
  strictFilters?: MetadataDTO[];
}): Action<Context> {
  invariant(
    typeof resourceName === 'string' && resourceName.length > 0,
    'qna-maker: `reso