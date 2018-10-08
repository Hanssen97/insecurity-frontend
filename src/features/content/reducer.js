import { actiontypes } from './actions';

const initialState = {
  topic: {
    title: "",
    description: "",
    owner: {
      username: "",
    },
    timestamp: "",
    category: "",
    comments: {
      edges: [],
    }
  },
  category: {
    name: "",
    topics: [],
  },
  categories: [],
  searchResult: {
    categories: [],
    topics: [],
  },
  info: "Post Topic",
}

export default function content(state = initialState, action) {
  switch(action.type) {
    case actiontypes.POST_TOPIC_SUCCESS: {
      return {...state,
        info: action.info,
        redirect: action.redirect,
        topic: action.topic,
      };
    }

    case actiontypes.GET_TOPIC_SUCCESS: {
      return {...state,
        info: action.info,
        topic: action.topic,
      };
    }

    case actiontypes.GET_CATEGORY_SUCCESS: {
      
      
      let newTopics = action.topics.filter(topic => !(!!state.category.topics.find(t => t.id === topic.id)));
      let topics = [...state.category.topics, ...newTopics];
      
      return {...state,
        info: action.info,
        category: {...state.category, topics},
      };
    }

    case actiontypes.GET_CATEGORIES_SUCCESS: {
      return {...state,
        info: action.info,
        categories: action.categories,
      };
    }

    case actiontypes.GET_SEARCH_RESULT_SUCCESS: {
      return {...state,
        info: action.info,
        query: action.query,
        searchResult: action.searchResult,
      };
    }

    default: {
      return state;
    }
  }
}
