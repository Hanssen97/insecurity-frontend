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

  CHANGE_LANGUAGE_REQUEST: 'CHANGE_LANGUAGE_REQUEST',
  CHANGE_LANGUAGE_SUCCESS: 'CHANGE_LANGUAGE_SUCCESS',
  CHANGE_LANGUAGE_FAILURE: 'CHANGE_LANGUAGE_FAILURE',
}


export const actions = {
  getSettings: () => ({
    type: actiontypes.GET_SETTINGS_REQUEST,
    info: "fetching current settings",
  }),
  changeEmail: (email, password) => ({
    type: actiontypes.CHANGE_EMAIL_REQUEST,
    info: "changing email",
    email,
    password,
  }),
  changePassword: (password, newPassword) => ({
    type: actiontypes.CHANGE_PASSWORD_REQUEST,
    info: "changing password",
    password,
    newPassword,
  }),
  changeLanguage: (language) => ({
    type: actiontypes.CHANGE_LANGUAGE_REQUEST,
    info: "changing language",
    language,
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

  changeEmail: function*(action) {
    const res = yield call(API.changeEmail, action.email, action.password);
    const data = res.settings;
    if (data.error || data.changeEmail.error) {
      yield put({
        type: actiontypes.CHANGE_EMAIL_FAILURE,
        error: data.error.message || data.changeEmail.error,
      });
    } else {
      yield put({
        type: actiontypes.CHANGE_EMAIL_SUCCESS,
        info: 'Fetched settings',
        user: data.changeEmail,
      });
    }
    yield put({
      type: actiontypes.CHANGE_LANGUAGE_SUCCESS,
      info: 'language changed',
      data,
    })
  },

  changePassword: function*(action) {
    const res = yield call(API.changePassword, action.password, action.newPassword);
    const data = res.settings;
    
    if (data.error || data.changePassword.error) {
      yield put({
        type: actiontypes.CHANGE_PASSWORD_FAILURE,
        error: data.error.message || data.changePassword.error,
      });
    } else {
      yield put({
        type: actiontypes.CHANGE_PASSWORD_SUCCESS,
        info: 'Fetched settings',
        user: data.changePassword,
      });
    }
    yield put({
      type: actiontypes.CHANGE_LANGUAGE_SUCCESS,
      info: 'language changed',
      data,
    })
  },

  changeLanguage: function*(action) {
    const res = yield call(API.changeLanguage, action.language);
    const data = res.settings;

    if (data.error || data.changeSettings.error) {
      yield put({
        type: actiontypes.GET_SETTINGS_FAILURE,
        error: data.error.message || data.changeSettings.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_SETTINGS_SUCCESS,
        info: 'Fetched settings',
        user: data.changeSettings,
      });
    }
    yield put({
      type: actiontypes.CHANGE_LANGUAGE_SUCCESS,
      info: 'language changed',
      data,
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.GET_SETTINGS_REQUEST, sagas.getSettings);
    yield takeEvery(actiontypes.CHANGE_EMAIL_REQUEST, sagas.changeEmail);
    yield takeEvery(actiontypes.CHANGE_PASSWORD_REQUEST, sagas.changePassword);
    yield takeEvery(actiontypes.CHANGE_LANGUAGE_REQUEST, sagas.changeLanguage);
  }

}
