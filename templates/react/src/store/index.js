'use strict';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';

import reducers from './reducers';


export const history = createHistory({ basename: process.env.BASENAME });

const initialState = {};

const middleware = [routerMiddleware(history), thunk];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);


export default createStore(reducers, initialState, composedEnhancers);
