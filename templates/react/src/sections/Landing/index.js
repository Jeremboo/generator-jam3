import { connect } from 'react-redux';
import connectTransitionWrapper from '../../decorators/connectTransitionWrapper';
import Landing from './Landing';

import { login } from '../../store/middlewares/api';

const mapStateToProps = (state, ownProps) => {
  return {
    connected: state.app.connected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pwd) => dispatch(login(email, pwd))
  };
};

@connectTransitionWrapper()
@connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  {withRef: true}
)

export default class LandingWrapper extends Landing {
  constructor(props) {
    super(props);
  }
}
