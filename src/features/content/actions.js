import { put, takeEvery } from 'redux-saga/effects'

export const actiontypes = {
  POST_TOPIC_REQUEST: 'POST_TOPIC_REQUEST',
  POST_TOPIC_SUCCESS: 'POST_TOPIC_SUCCESS',
  POST_TOPIC_FAILURE: 'POST_TOPIC_FAILURE',

  GET_TOPIC_REQUEST: 'GET_TOPIC_REQUEST',
  GET_TOPIC_SUCCESS: 'GET_TOPIC_SUCCESS',
  GET_TOPIC_FAILURE: 'GET_TOPIC_FAILURE',
}


export const actions = {
  postTopic: (topic) => ({
    type: actiontypes.POST_TOPIC_REQUEST,
    info: "posting topic...",
    topic: topic,
  }),
  getTopic: (topicId) => ({
    type: actiontypes.GET_TOPIC_REQUEST,
    info: "posting topic...",
    topicId,
  }),
}

// FUNCTION IS FOR TESTING PURPOSES UNTIL BACKEND IS CONNECTED
const getTopicFromServer = (id) => {
  console.log("Fetch topic from server with id =", id);
  return {
    title: "Long title for forum. lorem lorem lorem etc",
    description: "Long question for forum. Lorem Ipsum dolor sit amet etc..... ",
    owner: "morten",
    date: "12.12.2018",
    replies: [
        {
            owner: "jørgen",
            date: "12.02.2018",
            text: "Reply because lorem ipsum blah blah blah",
            likes: "23",
        },
        {
            owner: "bjarte",
            date: "12.02.2018",
            text: "Reply because lorem ipsum blah blah blah",
            likes: "23",
        },
    ],
  };
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

  getTopic: function*(action) {
    const topic = getTopicFromServer(action.topicId);

    yield put({
      type: actiontypes.POST_TOPIC_SUCCESS,
      info: 'topic received',
      topic,
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.POST_TOPIC_REQUEST, sagas.postTopic);
    yield takeEvery(actiontypes.GET_TOPIC_REQUEST, sagas.getTopic);
  }

}
