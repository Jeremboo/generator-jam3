import React, { PureComponent } from 'react';
import animate from 'gsap';
import PropTypes from 'prop-types';

class Landing extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    animate.set(this.container, {autoAlpha: 0});

    // Example of middleware usage
    this.props.login();
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

  animateIn = (onComplete) => {
    animate.to(this.container, 0.5, {autoAlpha: 1, onComplete});
  };

  animateOut = (onComplete) => {
    animate.to(this.container, 0.5, {autoAlpha: 0, onComplete});
  };

  render() {
    const { style, connected } = this.props;

    return (
      <main
        id="Landing"
        style={style}
        ref={r => this.container = r}
      >
        <h1>Landing</h1>
        <p>{connected ? 'Connected' : 'Not connected'}</p>
      </main>
    );
  }
}

Landing.propTypes = {
  style: PropTypes.object,
  windowWidth: PropTypes.number,
  windowHeight: PropTypes.number,
};

Landing.defaultProps = {
  style: {},
};

export default Landing;
