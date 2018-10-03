import { all } from 'redux-saga/effects'

import {sagas as session} from '../features/session/index';



export default function* rootSaga() {
  yield all([
    session.actionWatcher(),
  ])
}
