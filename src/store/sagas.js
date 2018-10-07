import { all } from 'redux-saga/effects'

import {sagas as session} from '../features/session';
import {sagas as content} from '../features/content';
import {sagas as user} from '../features/user';


export default function* rootSaga() {
  yield all([
    session.actionWatcher(),
    content.actionWatcher(),
    user.actionWatcher(),
  ])
}
