// Reducer containing feedback data such as fetching and error messages

const initialState = {
  fetching: false
}

export default function feedback(state = initialState, action) {

  if (action.type.includes("_REQUEST")) {
    state = {
      ...state,
      fetching: true
    }
  } else {
    state = {
      ...state,
      fetching: false
    }
  }

  return state;
}
