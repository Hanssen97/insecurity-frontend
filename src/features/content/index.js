import {connect} from 'react-redux';

import { sagas, actions } from './actions';
import reducer from './reducer';

// Components
import HomeView from './home/View';
import TopicCreate from './topic/Create';
import TopicView from './topic/View';
import CategoryView from './category/View';
import SearchView from './search/View';


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
