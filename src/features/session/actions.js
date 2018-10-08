import { put, call, takeLatest } from 'redux-saga/effects'
import * as API from '../../common/http/api/API';

export const actiontypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',

  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
}



export const actions = {
  login: (username, password) => ({
    type: actiontypes.LOGIN_REQUEST,
    info: "Logging in...",
    username,
    password,
  }),
  register: (username, email, password) => ({
    type: actiontypes.REGISTER_REQUEST,
    info: "Registering user...",
    username,
    password,
    email,
  }),
  getUser: () => ({
    type: actiontypes.GET_USER_REQUEST,
    info: "Fetching user...",
  }),
}


export const sagas = {
  login: function*(action) {
    const data = yield call(API.login, action.username, action.password);
    if (data.error || data.user.error) {
      yield put({
        type: actiontypes.LOGIN_FAILURE,
        error: data.error.message || data.user.error,
      });
    } else {
      localStorage.setItem("token", data.user.token);
      yield put({
        type: actiontypes.LOGIN_SUCCESS,
        info: 'User logged in',
        user: data.user,
      });
    }
  },

  register: function*(action) {
    let data = yield call(API.register, action.username, action.email, action.password);

    if (data.error || data.user.error) {
      yield put({
        type: actiontypes.REGISTER_FAILURE,
        error: data.error.message || data.user.error,
      });
    } else {
      localStorage.setItem("token", data.user.token);
      yield put({
        type: actiontypes.REGISTER_SUCCESS,
        info: 'Registered user',
        user: data.user,
      });
    }
  },

  getUser: function*() {
    let data = yield call(API.getUser);

    if (data.error || data.user.error) {
      yield put({
        type: actiontypes.GET_USER_FAILURE,
        error: data.error.message || data.user.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_USER_SUCCESS,
        info: 'Fetched user',
        user: data.user,
      });
    }
  },

  actionWatcher: function*() {
    yield takeLatest(actiontypes.LOGIN_REQUEST, sagas.login)
    yield takeLatest(actiontypes.REGISTER_REQUEST, sagas.register)
    yield takeLatest(actiontypes.GET_USER_REQUEST, sagas.getUser)
  }
}
