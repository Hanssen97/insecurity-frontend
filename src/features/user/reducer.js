import { actiontypes } from './actions';

const initialState = {
  currentSettings: {},
  info: "Fetching settings",
}

export default function user(state = initialState, action) {
  switch(action.type) {

    case actiontypes.GET_CURRENT_SETTINGS_SUCCESS: {
      return {...state,
        currentSettings: action.currentSettings,
        info: action.info
      };
    }

    default: {
      return state;
    }
  }
}
