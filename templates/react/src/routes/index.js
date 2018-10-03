import Landing from '../sections/Landing{{#if sectionNames}}/Landing{{/if}}';

export default [
  {
    key: 'landing',
    Component: Landing,
    path: {
      path: '/',
      exact: true
    }
  }
  {
    key: 'home',
    Component: () => <h1>Home</h1>,
    path: {
      path: '/',
    }
  }
];
