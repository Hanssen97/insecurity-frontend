import { actiontypes } from './actions';

const initialState = {
  settings: {
    username: "",
    email: "",
    profilePicture: "",
  },
  info: "Fetching settings",
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case actiontypes.GET_SETTINGS_SUCCESS: {
      return {...state,
        settings: action.settings,
        info: action.info
      };
    }

    case actiontypes.CHANGE_USERNAME_SUCCESS: {
      return {...state,
        settings: action.settings,
        info: action.info
      };
    }

    case actiontypes.CHANGE_EMAIL_SUCCESS: {
      return {...state,
        settings: action.settings,
        info: action.info
      };
    }

    case actiontypes.CHANGE_PASSWORD_SUCCESS: {
      return {...state,
        settings: action.settings,
        info: action.info
      };
    }

    default: {
      return state;
    }
  }
}
