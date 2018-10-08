import { actiontypes } from './actions';

const initialState = {
  user: null,
  info: "Press the button",
}

export default function session(state = initialState, action) {
  switch(action.type) {
    case actiontypes.LOGIN_REQUEST: {
      return {...state,
        info: action.info
      };
    }

    case actiontypes.LOGIN_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    case actiontypes.REGISTER_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    case actiontypes.GET_USER_SUCCESS: {
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
