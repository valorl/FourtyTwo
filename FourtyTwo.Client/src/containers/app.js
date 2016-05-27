import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { rehydrateAuth } from '../actions';

import Auth0Lock from 'auth0-lock';

import Authorized from './authorized';

class App extends React.Component {

	componentWillMount() {
		console.log(this.props.authenticated + ' authenticated in App');
		this.props.rehydrateAuth();
	}

	render() {
		return (
			<div className="main-container">
				{this.props.children}
			</div>
		);
	}
}

App.path = '/';


export default connect(null,{ rehydrateAuth })(App);
