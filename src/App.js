import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.min.css';

// Import authentication
import {authenticateUser} from './common/actions/authentication';

// Import store
import * as reducers from './store/reducers.js';
import rootSaga from './store/sagas'

// Import components
import { AuthLayout, MainLayout } from './layout';

// Import features
import Session from './features/session';
import Content from './features/content';
import User from './features/user';

// Create history objects
import createHistory from 'history/createBrowserHistory';
let history = createHistory();


const sagaMiddleware = createSagaMiddleware();

// Create store
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);



function View({component: Component, ...rest}) {
  return (
    <Route {...rest} render={renderProps => (
      authenticateUser(rest.level, store, history) ? (
        <Component { ...renderProps } />
      ) : (
        <Redirect to={{
          pathname: rest.redirect || '/',
          state: {from: renderProps.location}
        }} />
      )
    )}/>
  )
}


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Switch>

            <View path="/nope" component={Session.NotFound}/>

            <View path="/portal" component={AuthLayout} />

            <Route path="/">
              <MainLayout>
                <Switch>
                  <View exact path="/" component={Content.Home.View}/>
                  <View exact path="/settings" component={User.Settings.View}/>
                  <View exact path="/search/:query" component={Content.Search.SearchView}/>
                  <View exact path="/:category/new" component={Content.Topic.Create}/>
                  <View exact path="/:category/:topic" component={Content.Topic.View}/>
                  <View exact path="/:category" component={Content.Category.View}/>
                  <Redirect to="/nope" />
                </Switch>
              </MainLayout>
            </Route>


          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
