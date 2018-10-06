import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import Create from './topic/Create/index';
import View from './topic/View/index';
import CategoryView from './category/View';


const mapDispatchToProps = {
  postTopic: actions.postTopic,
  getTopic: actions.getTopic,
  getCategory: actions.getCategory,
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

let Category = {
  CategoryView: connect(mapStateToProps, mapDispatchToProps)(CategoryView),
}


export default {
  Topic,
  Category,
};

export {
  actions,
  sagas,
  reducer
}
