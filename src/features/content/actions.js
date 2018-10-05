import { put, takeEvery } from 'redux-saga/effects'

export const actiontypes = {
  POST_TOPIC_REQUEST: 'POST_TOPIC_REQUEST',
  POST_TOPIC_SUCCESS: 'POST_TOPIC_SUCCESS',
  POST_TOPIC_FAILURE: 'POST_TOPIC_FAILURE',
}


export const actions = {
  postTopic: () => ({
    type: actiontypes.POST_TOPIC_REQUEST,
    info: "posting topic..."
  })
}


export const sagas = {
  postTopic: function*() {
    const redirect = "topicurl";
    yield put({
      type: actiontypes.POST_TOPIC_SUCCESS,
      info: 'Topic posted',
      redirect
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.POST_TOPIC_REQUEST, sagas.postTopic)
  }
}
