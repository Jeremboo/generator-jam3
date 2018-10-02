import { handleActions } from 'redux-actions';

import keys from '../keys';

const preloadList = require(`../../../raw-assets/preload.json`);

const defaultState = {
  assets: preloadList,
  progress: 0,
};

export default handleActions({
  [keys.SET_ASSETS]: (state, action) => ({
    ...state,
    assets: action.payload
  }),
  [keys.SET_ASSETS]: (state, action) => ({
    ...state,
    progress: action.payload
  }),
}, defaultState);
