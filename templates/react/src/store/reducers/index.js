import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import preloader from './preloader';
import windowSize from './windowSize';

function enableBatchActions(reducers) {
  return function(state, action) {
    switch (action.type) {
      case 'BATCH_ACTIONS':
        return action.actions.reduce(reducers, state);
      default:
        return reducers(state, action);
    }
  };
}

export default enableBatchActions(combineReducers({
  app,
  preloader,
  windowSize,
  routing: routerReducer,
}));
