// CSS
import 'bootstrap-css-only';
import '../style/style.scss';
// END CSS


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';


const appRoot = document.getElementById('app-root');

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory} routes={routes} />
  </Provider>
  , appRoot);
// <Router history={browserHistory} routes={routes} />