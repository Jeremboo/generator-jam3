'use strict';
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import TransitionGroup from 'react-transition-group-plus';

import Preloader from '../../components/Preloader';
import Router from '../../components/Router';
import RotateScreen from '../../components/Rotate{{#if sectionNames}}/Rotate{{/if}}';

import detect from '../../util/detect';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  onResize = () => {
    this.props.setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  // ROUTING

  isTestingRoute = () => (
    location.pathname.split('/')[1] === 'test';
  );

  matchPath = path => (
    matchPath(location.pathname, path);
  );



  // RENDER
  renderRoute = () => {
    return this.props.routes
      .filter(({ path }) => this.matchPath(path))
      .map(({ Component, key, props }) => <Component key={key} {...props} />);
  };

  render() {
    const { ready } = this.props;
    const renderContent = ready || this.isTestingRoute()
      ? this.renderRoute()
      : <Preloader
        key="preloader"
        assetsList={this.props.assets}
        setProgress={this.props.onProgress}
        setReady={this.props.onReady}
      />
    ;

    return (
      <Fragment>
        <TransitionGroup id="App" component="div" transitionMode="out-in">
          {renderContent}
        </TransitionGroup>
        {detect.isPhone && <RotateScreen />}
      </Fragment>
    );
  }
}

App.propTypes = {
  ready: PropTypes.bool,
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  setWindowSize: PropTypes.func.isRequired
};

App.defaultProps = {
  ready: false
};

export default App;
