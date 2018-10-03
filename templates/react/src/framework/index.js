'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import detect from '../util/detect';
import warning from '../util/warning';

import store, { history } from '../store';
import App from '../sections/App';

export default function() {
  warning();
  const container = document.createElement('div');
  container.id = 'container';
  document.body.appendChild(container);
  document.body.className = [
    ...document.body.className.split(' '),
    ...detect.classes
  ].join(' ');

  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>,
    container
  );
}
