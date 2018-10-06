import { actiontypes } from './actions';

const initialState = {
  topic: {
    title: "",
    description: "",
    author: "",
    timestamp: "",
    replies:[]
  },
  info: "Post Topic",
  topics:[],
  categories: [],
}

export default function content(state = initialState, action) {
  switch(action.type) {
    case actiontypes.POST_TOPIC_REQUEST: {
      return {...state,
        info: action.info
      };
    }

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
      return {...state,
        info: action.info,
        topics: action.topics,
      };
    }

    case actiontypes.GET_CATEGORIES_SUCCESS: {
      return {...state,
        info: action.info,
        categories: action.categories,
      };
    }

    default: {
      return state;
    }
  }
}
