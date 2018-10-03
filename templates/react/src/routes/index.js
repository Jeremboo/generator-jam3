import React from 'react';
import { matchPath } from 'react-router';

import Landing from '../sections/Landing';

const manifest = [
  {
    key: 'landing',
    Component: Landing,
    path: {
      path: '/',
      exact: true
    }
  }
];

if (process.env.NODE_ENV === 'development') {
  manifest.push(...require('../test').default);
}

const match = path => (
  matchPath(location.pathname, path)
);

export const isTestingRoute = () => (
  location.pathname.split('/')[1] === 'test'
);

export const getRoute = () => manifest
  .filter(({ path }) => match(path))
  .map(({ Component, key, props }) => <Component key={key} {...props} />)
;
