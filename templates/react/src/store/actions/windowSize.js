import { createActions } from 'redux-actions';

import keys from '../keys';

// https://redux-actions.js.org/api/createaction#createactionsactionmap-identityactions
export const { setWidth, setHeight, setWindowSize } = createActions(
  // Actions Map
  {
    [keys.SET_WIDTH]: (width) => ({ width }),
    [keys.SET_HEIGHT]: (height) => ({ height })
  },
  // Identity actions
  keys.SET_WINDOW_SIZE,
)
