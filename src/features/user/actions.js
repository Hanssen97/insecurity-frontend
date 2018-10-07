import { put, call, takeEvery } from 'redux-saga/effects'
import {
    fetchSettings,
    changeUsername,
    changeEmail,
  } from '../../common/http/api/API';


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
  getSettings: (userId) => ({
    type: actiontypes.GET_SETTINGS_REQUEST,
    info: "fetching current settings",
    userId,
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
    getSettings: function*(action) {
      const settings = yield call(fetchSettings, action.userId);
      yield put({
        type: actiontypes.GET_SETTINGS_SUCCESS,
        info: 'settings fetched',
        userId: action.userId,
        settings,
      })
  },

  changeUsername: function*(action) {
    const settings = yield call(changeUsername, action.username);
    yield put({
      type: actiontypes.CHANGE_USERNAME_SUCCESS,
      info: 'username changed',
      username: action.username,
      settings,
    })
  },

  changeEmail: function*(action) {
    const settings = yield call(changeEmail, action.email);
    yield put({
      type: actiontypes.CHANGE_EMAIL_SUCCESS,
      info: 'email changed',
      email: action.email,
      settings,
    })
  },

  changePassword: function*(action) {
    const settings = yield call(fetchSettings, action.userId);
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
