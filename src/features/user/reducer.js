import { actiontypes } from './actions';

const initialState = {
  user: {
    username: "",
    email: "",
    profilePicture: "",
    settings: {
      language: "",
    }
  },
  info: "Fetching settings",
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case actiontypes.GET_SETTINGS_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    case actiontypes.CHANGE_EMAIL_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    case actiontypes.CHANGE_PASSWORD_SUCCESS: {
      return {...state,
        user: action.user,
        info: action.info
      };
    }

    case actiontypes.CHANGE_LANGUAGE_SUCCESS: {
      return {...state,
        user: {...state.user, ...action.user},
        info: action.info
      };
    }

    default: {
      return state;
    }
  }
}
