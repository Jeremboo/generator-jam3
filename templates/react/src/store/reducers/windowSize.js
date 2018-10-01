import keys from '../keys';

const defaultState = {
    width: 1024,
    height: 680
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case keys.SET_WINDOW_SIZE:
      return {
        width: action.payload.width,
        height: action.payload.height,
      };
    default:
      return state;
  }
};
