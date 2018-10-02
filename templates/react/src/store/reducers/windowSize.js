import { handleActions, combineActions } from 'redux-actions';

import keys from '../keys';

const defaultState = {
    width: 1024,
    height: 680
};

export default handleActions({
  [keys.SET_WINDOW_SIZE]: (state, action) => ({
    width: action.payload.width,
    height: action.payload.height,
  }),
  // You can have the same reducer for multiple actions
  // https://redux-actions.js.org/api/combineactions
  [combineActions(
    keys.SET_HEIGHT, keys.SET_WIDTH
  )]: (state, action) => ({
    ...state,
    ...action.payload
  }),
}, defaultState);
