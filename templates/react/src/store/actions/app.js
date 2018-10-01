import keys from '../keys';

export const setReady = function(payload) {
  return {
    type: keys.SET_READY,
    payload,
  };
};

export const setConnected = function(payload) {
  return {
    type: keys.SET_CONNECTED,
    payload,
  };
};
