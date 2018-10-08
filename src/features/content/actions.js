import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

import * as API from '../../common/http/api/API';


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
  getCategory: (id) => ({
    type: actiontypes.GET_CATEGORY_REQUEST,
    info: "fetching topic...",
    id,
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
    const topic = yield call(API.fetchTopic, action.topic);
    yield put({
      type: actiontypes.POST_TOPIC_SUCCESS,
      info: 'topic received',
      topic,
    })
  },

  getCategory: function*(action) {
    const category = yield call(API.getCategory, action.id);
    
    const topics = yield call(API.getTopics, action.id);
    
    if (topics.error || topics.topics.error || category.error || category.category.error) {
      yield put({
        type: actiontypes.GET_CATEGORY_FAILURE,
        error: topics.error.message || topics.topics.error || category.error || category.category.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_CATEGORY_SUCCESS,
        info: 'Registered user',
        topics: topics.topics.topic,
        name: category.name,
      });
    }
  },

  getCategories: function*() {
    const data = yield call(API.getCategories);
    
    console.log(data.categories.category)

    if (data.error || data.categories.error) {
      yield put({
        type: actiontypes.GET_CATEGORIES_FAILURE,
        error: data.error.message || data.categories.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_CATEGORIES_SUCCESS,
        info: 'Registered user',
        categories: data.categories.category,
      });
    }
  },

  getSearchResult: function*(action) {
    const searchResult = yield call(API.search, action.query);
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
