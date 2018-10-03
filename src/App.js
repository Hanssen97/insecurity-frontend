import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import logger from 'redux-logger';

import './Assets/css/App.min.css';

// Import reducers
import * as reducers from './store/index.js';

// Import components
import * as Session from './features/session/index';

// Create history objects
import createHistory from 'history/createBrowserHistory';
let history = createHistory();

// Create store
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);





class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Switch>
            <Route path="/login"  component={Session.Login}/>
            <Route                component={Session.NotFound}/>
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
export {store};
