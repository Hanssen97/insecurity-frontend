import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import HomeView from './home/View/index';
import TopicCreate from './topic/Create/index';
import TopicView from './topic/View/index';
import CategoryView from './category/View/index';
import SearchView from './search/View/index';


const mapDispatchToProps = {
  postTopic: actions.postTopic,
  getTopic: actions.getTopic,
  getCategory: actions.getCategory,
  getCategories: actions.getCategories,
  getSearchResult: actions.getSearchResult,
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

let Search = {
  SearchView: connect(mapStateToProps, mapDispatchToProps)(SearchView),
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
