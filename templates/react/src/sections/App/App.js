'use strict';
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group-plus';

import Preloader from '../../components/Preloader';
import RotateScreen from '../../components/Rotate';

import detect from '../../util/detect';

import { getRoute, isTestingRoute } from '../../routes';

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

  render() {
    const { ready } = this.props;
    const renderContent = ready || isTestingRoute()
      ? getRoute()
      : <Preloader
        key="preloader"
        assetsList={this.props.assets}
        setProgress={this.props.onProgress}
        setReady={this.props.onReady}
      />
    ;

    return (
      <Fragment>
        <TransitionGroup className="App" component="div" transitionMode="out-in">
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
