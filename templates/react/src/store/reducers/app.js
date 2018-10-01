import keys from '../keys';

const defaultState = {
  ready: false,
  connected: false,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case keys.SET_READY:
      return {
        ...state,
        ready: action.payload,
      };
    case keys.SET_CONNECTED:
      return {
        ...state,
        connected: action.payload,
      };
    default:
      return state;
  }
};
