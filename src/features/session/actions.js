import { put, call, takeLatest } from 'redux-saga/effects'
import {login, register} from '../../common/http/api/API';

export const actiontypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
}



export const actions = {
  login: (username, password) => ({
    type: actiontypes.LOGIN_REQUEST,
    info: "fetching user...",
    username,
    password,
  }),
  register: (username, email, password) => ({
    type: actiontypes.REGISTER_REQUEST,
    info: "fetching user...",
    username,
    password,
    email,
  }),
}


export const sagas = {
  login: function*(action) {
    const data = yield call(login, action.username, action.password);
    if (data.error || data.user.error) {
      yield put({
        type: actiontypes.LOGIN_FAILURE,
        error: data.error.message || data.user.error,
      });
    } else {
      localStorage.setItem("token", data.user.token);
      yield put({
        type: actiontypes.LOGIN_SUCCESS,
        info: 'Fetched user',
        user: data.user,
      });
    }
  },

  register: function*(action) {
    let data = yield call(register, action.username, action.email, action.password);

    if (data.error || data.user.error) {
      yield put({
        type: actiontypes.REGISTER_FAILURE,
        error: data.error.message || data.user.error,
      });
    } else {
      localStorage.setItem("token", data.user.token);
      yield put({
        type: actiontypes.REGISTER_SUCCESS,
        info: 'Fetched user',
        user: data.user,
      });
    }
  },

  actionWatcher: function*() {
    yield takeLatest(actiontypes.LOGIN_REQUEST, sagas.login)
    yield takeLatest(actiontypes.REGISTER_REQUEST, sagas.register)
  }
}
