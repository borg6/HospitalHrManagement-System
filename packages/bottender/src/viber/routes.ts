import Context from '../context/Context';
import { Action } from '../types';
import { RoutePredicate, route } from '../router';

import ViberContext from './ViberContext';

type Route = <C extends Context>(
  action: Action<ViberContext, any>
) => {
  predicate: RoutePredicate<C>;
  action: Actio