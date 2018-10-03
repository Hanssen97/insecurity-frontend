import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import Login from './Login/index';
import NotFound from './404/index';



const mapDispatchToProps = {
  fetchUser: actions.fetchUser
}
function mapStateToProps(state) {
  const { session } = state;
  return {
    session,
  }
}

// Components
export default {
  Login: connect(mapStateToProps, mapDispatchToProps)(Login),
  NotFound
};

export {
  actions,
  sagas,
  reducer
}
