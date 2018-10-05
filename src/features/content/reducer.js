import { actiontypes } from './actions';

const initialState = {
  topic: null,
  info: "Post Topic",
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
        redirect: action.redirect,
        info: action.info
      };
    }

    default: {
      return state;
    }
  }
}
