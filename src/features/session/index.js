import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import Login from './Login';
import Register from './Register';
import NotFound from './404';



const mapDispatchToProps = {
  login: actions.login,
  register: actions.register,
  getUser: actions.getUser,
}

function mapStateToProps(state) {
  const { session, feedback } = state;
  return {
    session,
    feedback
  }
}

// Components
export default {
  Login: connect(mapStateToProps, mapDispatchToProps)(Login),
  Register: connect(mapStateToProps, mapDispatchToProps)(Register),
  NotFound
};

export {
  actions,
  sagas,
  reducer
}
