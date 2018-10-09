import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import HomeView from './home/View';
import TopicCreate from './topic/Create';
import TopicView from './topic/View';
import CategoryView from './category/View';
import SearchView from './search/View';


const searchActions = {
  getSearchResult: actions.getSearchResult,
}

const topicActions = {
  postTopic: actions.postTopic,
  getTopic: actions.getTopic,
  postComment: actions.postComment,
}

const categoryActions = {
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
  Create: connect(mapStateToProps, topicActions)(TopicCreate),
  View: connect(mapStateToProps, topicActions)(TopicView),
}

let Category = {
  View: connect(mapStateToProps, categoryActions)(CategoryView),
}

let Home = {
  View: connect(mapStateToProps, {...topicActions, ...categoryActions})(HomeView),
}

let Search = {
  SearchView: connect(mapStateToProps, searchActions)(SearchView),
}


export default {
  Topic,
  Category,
  Home,
  Search
};

export {
  actions,
  sagas,
  reducer
}
