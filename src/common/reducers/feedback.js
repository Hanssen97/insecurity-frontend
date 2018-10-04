// Reducer containing feedback data such as fetching and error messages

const initialState = {
  isFetching: false
}

export default function feedback(state = initialState, action) {

  if (action.type.includes("_REQUEST")) {
    state = {
      ...state,
      isFetching: true
    }
  } else {
    state = {
      ...state,
      isFetching: false
    }
  }

  return state;
}
