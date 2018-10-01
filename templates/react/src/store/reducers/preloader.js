import keys from '../keys';

const preloadList = require(`../../../raw-assets/preload.json`);

const defaultState = {
  assets: preloadList,
  progress: 0,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case keys.SET_ASSETS:
      return {
        ...state,
        assets: action.payload,
      };

    case keys.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };

    default:
      return state;
  }
};
