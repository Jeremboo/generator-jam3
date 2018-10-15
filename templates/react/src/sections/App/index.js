import { connect } from 'react-redux';
import App from './App';
import { setWindowSize } from '../../store/actions/windowSize';

const mapStateToProps = (state, ownProps) => {
  return {
    ready: state.app.ready,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWindowSize: val => dispatch(setWindowSize(val)),
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  {withRef: true}
)

export default class AppWrapper extends App {
  constructor(props) {
    super(props);
  }
}
