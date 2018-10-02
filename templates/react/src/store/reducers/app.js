import { handleActions } from 'redux-actions';

import keys from '../keys';

const defaultState = {
  ready: false,
  connected: false,
};

export default handleActions({
  [keys.SET_READY]: (state, action) => ({
    ...state,
    ready: action.payload
  }),
  [keys.SET_CONNECTED]: (state, action) => ({
    ...state,
    connected: action.payload
  }),
}, defaultState);
