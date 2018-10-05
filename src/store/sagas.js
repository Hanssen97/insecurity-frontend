import { all } from 'redux-saga/effects'

import {sagas as session} from '../features/session/index';
import {sagas as content} from '../features/content/index';



export default function* rootSaga() {
  yield all([
    session.actionWatcher(),
    content.actionWatcher(),
  ])
}
