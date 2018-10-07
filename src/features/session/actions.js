import { put, call, takeEvery } from 'redux-saga/effects'
import {fetchUser} from '../../common/http/api/API';

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
    let user = yield call(fetchUser);

    yield put({
      type: actiontypes.FETCH_USER_SUCCESS,
      info: 'Fetched user',
      user
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.FETCH_USER_REQUEST, sagas.fetchUsers)
  }
}
