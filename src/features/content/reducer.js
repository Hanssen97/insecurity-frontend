import { actiontypes } from './actions';

const initialState = {
  createTopic: {
    id: "",
  },
  topic: {
    id: "",
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
    category: {
      edges: [],
    },
    topic: {
      edges: [],
    },
  },
  info: "Post Topic",
}

export default function content(state = initialState, action) {
  switch(action.type) {
    case actiontypes.POST_TOPIC_SUCCESS: {
      return {...state,
        info: action.info,
        createTopic: action.topic,
      };
    }

    case actiontypes.GET_TOPIC_SUCCESS: {
      return {...state,
        info: action.info,
        topic: action.topic,
        createTopic: {id: ""},
      };
    }

    case actiontypes.GET_CATEGORY_SUCCESS: {
      return {...state,
        info: action.info, 
        category: {...action.category, topics: action.topics},
      };
    }

    case actiontypes.GET_CATEGORIES_SUCCESS: {
      return {...state,
        info: action.info,
        categories: action.categories,
      };
    }

    case actiontypes.POST_COMMENT_SUCCESS: {
      return {...state,
        info: action.info,
        topic: {
          ...state.topic,
          comments: {
            edges: [
              ...state.topic.comments.edges,
              { node: action.comment }
            ]
          }
        }
      };
    }

    case actiontypes.GET_SEARCH_RESULT_SUCCESS: {
      console.log("ACITION", action.searchResult)
      return {...state,
        info: action.info,
        query: action.query,
        searchResult: {
          category: action.searchResult.category,
          topic: action.searchResult.topic
        },
      };
    }

    default: {
      return state;
    }
  }
}
