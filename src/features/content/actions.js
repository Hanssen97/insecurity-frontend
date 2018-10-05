import { put, takeEvery } from 'redux-saga/effects'

export const actiontypes = {
  POST_TOPIC_REQUEST: 'POST_TOPIC_REQUEST',
  POST_TOPIC_SUCCESS: 'POST_TOPIC_SUCCESS',
  POST_TOPIC_FAILURE: 'POST_TOPIC_FAILURE',
}


export const actions = {
  postTopic: (topic) => ({
    type: actiontypes.POST_TOPIC_REQUEST,
    info: "posting topic...",
    topic: topic,
  })
}


export const sagas = {
  postTopic: function*(action) {
    const redirect = "topic/topicIdFromBackend";
    
    yield put({
      type: actiontypes.POST_TOPIC_SUCCESS,
      info: 'topic posted',
      topic: action.topic,
      redirect,
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.POST_TOPIC_REQUEST, sagas.postTopic)
  }

}
