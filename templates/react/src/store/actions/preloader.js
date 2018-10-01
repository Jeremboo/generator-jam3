import keys from '../keys';

export const setAssets = function(payload) {
  return {
    type: keys.SET_ASSETS,
    payload,
  };
};

export const setProgress = function(payload) {
  return {
    type: keys.SET_PROGRESS,
    payload,
  };
};
