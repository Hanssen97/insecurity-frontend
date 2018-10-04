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
import { AuthLayout } from './layouts/index';

import Session from './features/session/index';

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
                  <Route path="/member/register" component={Session.Login}/>
                  <Redirect to="/" />
                </Switch>
              </AuthLayout>
            </Route>

            <Route component={Session.NotFound}/>
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
export {store};
