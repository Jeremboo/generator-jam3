import React from 'react';
import { manifest } from '../../index';
import { Link } from 'react-router-dom';

const linkStyle = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  fontSize: '18px',
  padding: '20px 0'
};

export default class TestPage extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    this.el.style.width = window.innerWidth + 'px';
    this.el.style.minHeight = window.innerHeight + 'px';
  };
  render() {
    return (
      <div
        ref={ref => {
          this.el = ref;
        }}
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {manifest
          .map(({ key }) => (
            <Link key={key} style={linkStyle} to={`/test/${key}`}>
              {key}
            </Link>
          ))}
      </div>
    );
  }
}
