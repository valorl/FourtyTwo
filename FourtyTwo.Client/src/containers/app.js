import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { rehydrateAuth } from '../actions';

import Auth0Lock from 'auth0-lock';

import Authorized from './authorized';

class App extends React.Component {

	componentWillMount() {
		this.props.rehydrateAuth();
		// let redirect = null;
		// console.log(this.props.authenticated);
		// this.props.authenticated ? redirect = '/app' : redirect = '/login';
		// browserHistory.push(redirect);
	}


	getIdToken() {
		var idToken = localStorage.getItem('id_token');
		var authHash = this.lock.parseHash(window.location.hash);
		console.log(authHash);
		if (!idToken && authHash) {
			if (authHash.id_token) {
				idToken = authHash.id_token
				localStorage.setItem('id_token', authHash.id_token);
				if(authHash.profile) {
					localStorage.setItem('user_id', authHash.profile.sub.split("|")[1]);
				}
			}
			if (authHash.error) {
				console.log("Error signing in", authHash);
				return null;
			}
		}
		return idToken;
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

const mapStateToProps = (state) => {
	return {
		authenticated: state.authenticated
	}
}

export default connect(mapStateToProps, { rehydrateAuth })(App);
