import keys from '../keys';

export const setWindowSize = function(payload) {
  return {
    type: keys.SET_WINDOW_SIZE,
    payload,
  };
};
