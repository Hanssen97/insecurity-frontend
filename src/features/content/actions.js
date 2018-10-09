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

  POST_COMMENT_REQUEST: 'POST_COMMENT_REQUEST',
  POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
  POST_COMMENT_FAILURE: 'POST_COMMENT_FAILURE',

}


export const actions = {
  postTopic: (category, title, body) => ({
    type: actiontypes.POST_TOPIC_REQUEST,
    info: "posting topic...",
    category,
    title,
    body,
  }),
  getTopic: (topic) => ({
    type: actiontypes.GET_TOPIC_REQUEST,
    info: "fetching topic...",
    topic,
  }),
  postComment: (topic, comment) => ({
    type: actiontypes.POST_COMMENT_REQUEST,
    info: "posting comment...",
    topic,
    comment,
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
    const data = yield call(API.createTopic, action.category, action.title, action.body);
    console.log(data);
    if (data.error || data.topic.id.error) {
      yield put({
        type: actiontypes.POST_TOPIC_FAILURE,
        error: data.error.message || data.topic.id.error,
      });
    } else {
      yield put({
        type: actiontypes.POST_TOPIC_SUCCESS,
        info: 'Fetched topic',
        topic: data.topic,
      });
    }
  },

  getTopic: function*(action) {
    const data = yield call(API.getTopic, action.topic);
    if (data.error || data.topic.error) {
      yield put({
        type: actiontypes.GET_TOPIC_FAILURE,
        error: data.error.message || data.topic.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_TOPIC_SUCCESS,
        info: 'Fetched topic',
        topic: data.topic,
      });
    }
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
        topics: topics.topics.edges,
        name: category.name,
      });
    }
  },

  getCategories: function*() {
    const data = yield call(API.getCategories);

    if (data.error || data.categories.error) {
      yield put({
        type: actiontypes.GET_CATEGORIES_FAILURE,
        error: data.error.message || data.categories.error,
      });
    } else {
      yield put({
        type: actiontypes.GET_CATEGORIES_SUCCESS,
        info: 'Registered user',
        categories: data.categories.edges,
      });
    }
  },

  postComment: function*(action) {
    const data = yield call(API.createComment, action.topic, action.comment);
    console.log(data);
    if (data.error || data.comment.error) {
      yield put({
        type: actiontypes.POST_COMMENT_FAILURE,
        error: data.error.message || data.comment.error,
      });
    } else {
      yield put({
        type: actiontypes.POST_COMMENT_SUCCESS,
        info: 'Posted comment',
        comment: data.comment,
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
    yield takeEvery(actiontypes.POST_COMMENT_REQUEST, sagas.postComment);
  }

}
