import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    getCurrentSettingsFromServer,
  } from '../../common/http/api/API';


export const actiontypes = {
  GET_CURRENT_SETTINGS_REQUEST: 'GET_CURRENT_SETTINGS_REQUEST',
  GET_CURRENT_SETTINGS_SUCCESS: 'GET_CURRENT_SETTINGS_SUCCESS',
  GET_CURRENT_SETTINGS_FAILURE: 'GET_CURRENT_SETTINGS_FAILURE',

  POST_NEW_SETTINGS_REQUEST: 'POST_NEW_SETTINGS_REQUEST',
  POST_NEW_SETTINGS_SUCCESS: 'POST_NEW_SETTINGS_SUCCESS',
  POST_NEW_SETTINGS_FAILURE: 'POST_NEW_SETTINGS_FAILURE',
}


export const actions = {
  getCurrentSettings: (userId) => ({
    type: actiontypes.GET_CURRENT_SETTINGS_REQUEST,
    info: "fetching current settings",
    userId,
  }),
}

export const sagas = {
    getCurrentSettings: function*(action) {
      const currentSettings = yield call(getCurrentSettingsFromServer, action.userId);
      yield put({
        type: actiontypes.GET_CURRENT_SETTINGS_SUCCESS,
        info: 'settings fetched',
        userId: action.userId,
        currentSettings,
      })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.GET_CURRENT_SETTINGS_REQUEST, sagas.getCurrentSettings);
  }

}
