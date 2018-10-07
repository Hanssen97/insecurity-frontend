import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import SettingsView from './settings/View/index';


const mapDispatchToProps = {
  getCurrentSettings: actions.getCurrentSettings,
}

function mapStateToProps(state) {
  const { user, feedback } = state;
  return {
    user,
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
