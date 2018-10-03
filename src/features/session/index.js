import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Login from './Login/index';
import NotFound from './404/index';

import { sagas, actions } from './actions';
import reducer from './reducer';



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

// Store
export {
  sagas,
  reducer
}
