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
import { AuthLayout, MainLayout } from './layouts/index';

import Session from './features/session/index';
import Content from './features/content/index';

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
            <Route path="/member">
              <AuthLayout>
                <Switch>
                  <Route exact path="/member/login" component={Session.Login}/>
                  <Route exact path="/member/register" component={Session.Register}/>
                  <Redirect to="/" />
                </Switch>
              </AuthLayout>
            </Route>
            <Route path="/">
              <MainLayout>
                <Switch>
                  <Route exact path="/createtopic" component={Content.CreateTopic}/>
                  <Route exact path="/topic" component={Content.Topic}/>
                </Switch>
              </MainLayout>
            </Route>
            <Route component={Session.NotFound}/>
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
