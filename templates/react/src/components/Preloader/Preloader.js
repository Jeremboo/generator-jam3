'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import animate from 'gsap';
import preloader from 'preloader';
import SVGInline from 'react-svg-inline';
import LoaderIcon from '../../../raw-assets/svg/loader.svg';

class Preloader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  async componentDidMount() {
    animate.set(this.container, {autoAlpha: 0});

    try {
      await this.load();
    } catch(e) {
      this.setState({ error: e.message });
    }
  }

  componentWillAppear(done) {
    this.animateIn(done);
  }

  componentWillEnter(done) {
    this.animateIn(done);
  }

  componentWillLeave(done) {
    this.animateOut(done);
  }

  animateIn(onComplete) {
    animate.to(this.container, 0.5, {autoAlpha: 1, onComplete});
  };

  animateOut(onComplete) {
    animate.to(this.container, 0.5, {autoAlpha: 0, onComplete});
  };

  async load() {
    await this.setTimer();
    await this.setLoader();
    // TODO add other things to load
    this.setDone();
  }

  setTimer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, this.props.minDisplayTime)
    })
  };

  setLoader() {
    return new Promise((resolve, reject) => {
      this.loader = preloader(this.props.options);
      this.props.assets.forEach(file => this.loader.add(file, {}));
      this.loader.on('progress', this.onProgress);
      this.loader.on('complete', () => this.onComplete(resolve));
      this.loader.load();
    })
  };

  onProgress = (val) => {
    this.props.setProgress(val);
  };

  onComplete = (done) => {
    this.props.setProgress(1);
    done();
  };

  setDone() {
    this.props.setReady(true);
  };

  render() {
    const props = this.props;

    return (
      <section
        className="Preloader"
        ref={r => this.container = r}
      >
        <div className="Preloader-wrapper">
          <SVGInline
            className="Preloader-icon"
            svg={LoaderIcon}
            component="div"
          />
          {this.state.error
            && <p className="Preloader-info _error">{this.state.error}</p>
          }
        </div>
      </section>
    );
  }
}

Preloader.propTypes = {
  assets: PropTypes.array.isRequired,
  setProgress: PropTypes.func.isRequired,
  setReady: PropTypes.func.isRequired,
  minDisplayTime: PropTypes.number,
  options: PropTypes.object,
  isTest: PropTypes.bool,
};

Preloader.defaultProps = {
  minDisplayTime: 0, // in milliseconds
  options: {
    xhrImages: false,
    loadFullAudio: false,
    loadFullVideo: false,
    onProgress: f => f,
    onComplete: f => f,
  },
  setProgress: f => f,
};

export default Preloader;
