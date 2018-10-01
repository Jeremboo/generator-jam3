import keys from '../keys';

export const setReady = function(ready) {
  return {
    type: keys.SET_READY,
    ready,
  };
};

export const setWindowSize = function(windowSize) {
  return {
    type: keys.SET_WINDOW_SIZE,
    windowSize,
  };
};

export const setConnected = function(connected) {
  return {
    type: keys.SET_CONNECTED,
    connected,
  };
};
