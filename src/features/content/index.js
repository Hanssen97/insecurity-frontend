import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import CreateTopic from './CreateTopic/index';
import Topic from './Topic/index';


const mapDispatchToProps = {
  postTopic: actions.postTopic,
  getTopic: actions.getTopic,
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
  Topic: connect(mapStateToProps, mapDispatchToProps)(Topic),
};

export {
  actions,
  sagas,
  reducer
}
