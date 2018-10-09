import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import { actions } from '../features/session';
import AuthLayout from './Authentication';
import MainLayout from './Main/index';

const mapDispatchToProps = {
  getUser: actions.getUser,
  logout: actions.logout,
}

function mapStateToProps(state) {
  const { session, user, feedback } = state;
  return {
    session,
    feedback,
    user,
  }
}

export default {
  AuthLayout: withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthLayout)),
  MainLayout: withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout)),
}
