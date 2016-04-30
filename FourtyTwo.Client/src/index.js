// CSS
import 'bootstrap-css-only';
import '../style/style.scss';
// END CSS


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

import App from './containers/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const appRoot = document.getElementById('app-root');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory} routes={routes} />
  </Provider>
  , appRoot);
// <Router history={browserHistory} routes={routes} />