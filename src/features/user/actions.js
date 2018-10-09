import { put, call, takeEvery } from 'redux-saga/effects'
import * as API from '../../common/http/api/API';


export const actiontypes = {
  GET_SETTINGS_REQUEST: 'GET_SETTINGS_REQUEST',
  GET_SETTINGS_SUCCESS: 'GET_SETTINGS_SUCCESS',
  GET_SETTINGS_FAILURE: 'GET_SETTINGS_FAILURE',

  CHANGE_USERNAME_REQUEST: 'CHANGE_USERNAME_REQUEST',
  CHANGE_USERNAME_SUCCESS: 'CHANGE_USERNAME_SUCCESS',
  CHANGE_USERNAME_FAILURE: 'CHANGE_USERNAME_FAILURE',

  CHANGE_EMAIL_REQUEST: 'CHANGE_EMAIL_REQUEST',
  CHANGE_EMAIL_SUCCESS: 'CHANGE_EMAIL_SUCCESS',
  CHANGE_EMAIL_FAILURE: 'CHANGE_EMAIL_FAILURE',

  CHANGE_PASSWORD_REQUEST: 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILURE: 'CHANGE_PASSWORD_FAILURE',
}


export const actions = {
  getSettings: () => ({
    type: actiontypes.GET_SETTINGS_REQUEST,
    info: "fetching current settings",
  }),
  changeUsername: (username) => ({
    type: actiontypes.CHANGE_USERNAME_REQUEST,
    info: "changing username",
    username,
  }),
  changeEmail: (email) => ({
    type: actiontypes.CHANGE_EMAIL_REQUEST,
    info: "changing email",
    email,
  }),
  changePassword: (password) => ({
    type: actiontypes.CHANGE_PASSWORD_REQUEST,
    info: "changing password",
    password,
  }),
}

export const sagas = {
    getSettings: function*() {
      const data = yield call(API.getSettings);

      if (data.error || data.user.error) {
        yield put({
          type: actiontypes.GET_SETTINGS_FAILURE,
          error: data.error.message || data.user.error,
        });
      } else {
        yield put({
          type: actiontypes.GET_SETTINGS_SUCCESS,
          info: 'Fetched settings',
          user: data.user,
        });
      }
  },

  changeUsername: function*(action) {
    const settings = yield call(API.changeUsername, action.username);
    yield put({
      type: actiontypes.CHANGE_USERNAME_SUCCESS,
      info: 'username changed',
      username: action.username,
      settings,
    })
  },

  changeEmail: function*(action) {
    const settings = yield call(API.changeEmail, action.email);
    yield put({
      type: actiontypes.CHANGE_EMAIL_SUCCESS,
      info: 'email changed',
      email: action.email,
      settings,
    })
  },

  changePassword: function*(action) {
    const settings = yield call(API.fetchSettings, action.userId);
    yield put({
      type: actiontypes.CHANGE_PASSWORD_SUCCESS,
      info: 'password changed',
      settings,
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.GET_SETTINGS_REQUEST, sagas.getSettings);
    yield takeEvery(actiontypes.CHANGE_USERNAME_REQUEST, sagas.changeUsername);
    yield takeEvery(actiontypes.CHANGE_EMAIL_REQUEST, sagas.changeEmail);
    yield takeEvery(actiontypes.CHANGE_PASSWORD_REQUEST, sagas.changePassword);
  }

}
