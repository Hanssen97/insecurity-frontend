// Reducer containing feedback data such as fetching and error messages

const initialState = {
  fetching: false,
  errors: [],
}

export default function feedback(state = initialState, action) {

  if (action.type.includes("_REQUEST")) {
  return {
      ...state,
      fetching: true
    }
  }

  if (action.type.includes("_FAILURE")) {
    return {
      ...state,
      fetching: false,
      errors: [
        ...state.errors,
        action.error
      ]
    }
  }
  
  return {
      ...state,
      fetching: false
  }

}
