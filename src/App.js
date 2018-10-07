import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.min.css';

// Import store
import * as reducers from './store/reducers.js';
import rootSaga from './store/sagas'

// Import components
import { AuthLayout, MainLayout } from './layouts';

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

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Switch>

            <Route path="/nope" component={Session.NotFound}/>


            <Route path="/member">
              <AuthLayout>
                <Switch>
                  <Route exact path="/member/login" component={Session.Login}/>
                  <Route exact path="/member/register" component={Session.Register}/>
                  <Redirect to="/nope" />
                </Switch>
              </AuthLayout>
            </Route>


            <Route path="/">
              <MainLayout>
                <Switch>
                  <Route exact path="/" component={Content.Home.View}/>
                  <Route exact path="/settings" component={User.Settings.View}/>
                  <Route exact path="/search/:query" component={Content.Search.SearchView}/>
                  <Route exact path="/:category/new" component={Content.Topic.Create}/>
                  <Route exact path="/:category/:topic" component={Content.Topic.View}/>
                  <Route exact path="/:category" component={Content.Category.View}/>
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
