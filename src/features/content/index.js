import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import HomeView from './home/View/index';
import TopicCreate from './topic/Create/index';
import TopicView from './topic/View/index';
import CategoryView from './category/View/index';


const mapDispatchToProps = {
  postTopic: actions.postTopic,
  getTopic: actions.getTopic,
  getCategory: actions.getCategory,
  getCategories: actions.getCategories,
}

function mapStateToProps(state) {
  const { content, feedback } = state;
  return {
    content,
    feedback
  }
}

let Topic = {
  Create: connect(mapStateToProps, mapDispatchToProps)(TopicCreate),
  View: connect(mapStateToProps, mapDispatchToProps)(TopicView),
}

let Category = {
  View: connect(mapStateToProps, mapDispatchToProps)(CategoryView),
}

let Home = {
  View: connect(mapStateToProps, mapDispatchToProps)(HomeView),
}


export default {
  Topic,
  Category,
  Home
};

export {
  actions,
  sagas,
  reducer
}
