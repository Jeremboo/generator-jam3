'use strict';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import reducers from './reducers';

// HISTORY
export const history = createBrowserHistory({
  basename: process.env.BASENAME
});

// STORE
// Reducers
const rootReducers = connectRouter(history)(reducers);

// Preloaded State
const initialState = {};

// Enhancers
const middleware = [routerMiddleware(history), thunk];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);


export default createStore(rootReducers, initialState, composedEnhancers);
