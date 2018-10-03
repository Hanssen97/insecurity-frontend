import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export const actiontypes = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
}



export const actions = {
  fetchUser: () => ({
    type: actiontypes.FETCH_USER_REQUEST,
    info: "fetching user..."
  })
}



export const sagas = {
  fetchUsers: function*() {
    //  fetching user
    yield delay(1000);

    yield put({
      type: actiontypes.FETCH_USER_SUCCESS,
      info: 'Fetched user',
      user: {name: 'test'}
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.FETCH_USER_REQUEST, sagas.fetchUsers)
  }
}
