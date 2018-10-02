import { createActions } from 'redux-actions';

import keys from '../keys';

export const { setAssets, setProgress } = createActions(
  keys.SET_ASSETS,
  keys.SET_PROGRESS,
)
