import { createActions } from 'redux-actions';

import keys from '../keys';

export const { setReady, setConnected } = createActions(
  keys.SET_READY,
  keys.SET_CONNECTED,
)
