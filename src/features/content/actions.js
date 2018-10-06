import { put, takeEvery } from 'redux-saga/effects'

import {
  getTopicsFromServer,
  getSearchResultFromServer,
  getTopicFromServer
} from '../../common/http/api/API';


export const actiontypes = {
  POST_TOPIC_REQUEST: 'POST_TOPIC_REQUEST',
  POST_TOPIC_SUCCESS: 'POST_TOPIC_SUCCESS',
  POST_TOPIC_FAILURE: 'POST_TOPIC_FAILURE',

  GET_TOPIC_REQUEST: 'GET_TOPIC_REQUEST',
  GET_TOPIC_SUCCESS: 'GET_TOPIC_SUCCESS',
  GET_TOPIC_FAILURE: 'GET_TOPIC_FAILURE',

  GET_CATEGORY_REQUEST: 'GET_CATEGORY_REQUEST',
  GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_FAILURE: 'GET_CATEGORY_FAILURE',

  GET_SEARCH_RESULT_REQUEST: 'GET_SEARCH_RESULT_REQUEST',
  GET_SEARCH_RESULT_SUCCESS: 'GET_SEARCH_RESULT_SUCCESS',
  GET_SEARCH_RESULT_FAILURE: 'GET_SEARCH_RESULT_FAILURE',
}


export const actions = {
  postTopic: (topic) => ({
    type: actiontypes.POST_TOPIC_REQUEST,
    info: "posting topic...",
    topic,
  }),
  getTopic: (topicId) => ({
    type: actiontypes.GET_TOPIC_REQUEST,
    info: "fetching topic...",
    topicId,
  }),
  getCategory: (category) => ({
    type: actiontypes.GET_CATEGORY_REQUEST,
    info: "fetching topic...",
    category,
  }),
  getSearchResult: (query) => ({
    type: actiontypes.GET_SEARCH_RESULT_REQUEST,
    info: "fetching search result...",
    query,
  }),
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

  getCategory: function*(action) {

    const topics = getTopicsFromServer(action.category);

    yield put({
      type: actiontypes.GET_CATEGORY_SUCCESS,
      info: 'category received',
      topics,
    })
  },

  getSearchResult: function*(action) {
    const searchResult = getSearchResultFromServer(action.query);

    yield put({
      type: actiontypes.GET_SEARCH_RESULT_SUCCESS,
      info: 'Search completed',
      query: action.query,
      searchResult,
    })
  },

  actionWatcher: function*() {
    yield takeEvery(actiontypes.POST_TOPIC_REQUEST, sagas.postTopic);
    yield takeEvery(actiontypes.GET_TOPIC_REQUEST, sagas.getTopic);
    yield takeEvery(actiontypes.GET_CATEGORY_REQUEST, sagas.getCategory);
    yield takeEvery(actiontypes.GET_SEARCH_RESULT_REQUEST, sagas.getSearchResult);
  }

}
