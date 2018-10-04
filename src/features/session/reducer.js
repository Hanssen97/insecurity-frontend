import { actiontypes } from './actions';

const initialState = {
  user: null,
  info: "Press the button",
}

export default function session(state = initialState, action) {
  switch(action.type) {
    case actiontypes.FETCH_USER_REQUEST: {
      return {...state,
        info: action.info
      };
    }

    case actiontypes.FETCH_USER_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    default: {
      return state;
    }
  }
}
