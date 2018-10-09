import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import SettingsView from './settings/View';


const mapDispatchToProps = {
  getSettings: actions.getSettings,
  changeEmail: actions.changeEmail,
  changePassword: actions.changePassword,
  changeLanguage: actions.changeLanguage,
}

function mapStateToProps(state) {
  const { user, session, feedback } = state;
  return {
    user,
    session,
    feedback
  }
}

let Settings = {
  View: connect(mapStateToProps, mapDispatchToProps)(SettingsView),
}


export default {
  Settings
};

export {
  actions,
  sagas,
  reducer
}
