import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

export const actiontypes = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
}


// FUNCTION IS FOR TEST PURPOSES
async function testAsyncFetchUser() {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve({name: "Morten"});
     }, 1000);
   }).then(data => data)
}





export const actions = {
  fetchUser: () => ({
    type: actiontypes.FETCH_USER_REQUEST,
    info: "fetching user..."
  })
}



export const sagas = {
  fetchUsers: function*() {
    let user = yield call(testAsyncFetchUser);

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
