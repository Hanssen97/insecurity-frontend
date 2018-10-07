import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

import {
  fetchTopics,
  fetchTopic,
  fetchAllCategories,
  search,
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

  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',

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
  getTopic: (topic) => ({
    type: actiontypes.GET_TOPIC_REQUEST,
    info: "fetching topic...",
    topic,
  }),
  getCategory: (category) => ({
    type: actiontypes.GET_CATEGORY_REQUEST,
    info: "fetching topic...",
    category,
  }),
  getCategories: () => ({
    type: actiontypes.GET_CATEGORIES_REQUEST,
    info: "fetching categories..."
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
    const topic = yield call(fetchTopic, action.topic);
    yield put({
      type: actiontypes.POST_TOPIC_SUCCESS,
      info: 'topic received',
      topic,
    })
  },

  getCategory: function*(action) {
    const topics = yield call(fetchTopics, action.category);
    yield put({
      type: actiontypes.GET_CATEGORY_SUCCESS,
      info: 'category received',
      topics,
    })
  },

  getCategories: function*(action) {
    const categories = yield call(fetchAllCategories);
    yield put({
      type: actiontypes.GET_CATEGORIES_SUCCESS,
      info: 'categories received',
      categories,
    })
  },

  getSearchResult: function*(action) {
    const searchResult = yield call(search, action.query);
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
    yield takeLatest(actiontypes.GET_CATEGORIES_REQUEST, sagas.getCategories);
    yield takeEvery(actiontypes.GET_SEARCH_RESULT_REQUEST, sagas.getSearchResult);
  }

}
