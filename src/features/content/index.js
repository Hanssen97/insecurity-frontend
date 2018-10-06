import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import Create from './topic/Create/index';
import View from './topic/View/index';


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

// Topic
let Topic = {
  Create: connect(mapStateToProps, mapDispatchToProps)(Create),
  View: connect(mapStateToProps, mapDispatchToProps)(View),
}




export default {
  Topic
};

export {
  actions,
  sagas,
  reducer
}
