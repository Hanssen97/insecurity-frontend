import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import CreateTopic from './CreateTopic/index';


const mapDispatchToProps = {
  postTopic: actions.postTopic
}

function mapStateToProps(state) {
  const { content, feedback } = state;
  return {
    content,
    feedback
  }
}

// Components
export default {
  CreateTopic: connect(mapStateToProps, mapDispatchToProps)(CreateTopic),
};

export {
  actions,
  sagas,
  reducer
}
