import React from 'react';

import Auth0Lock from 'auth0-lock';


import Login from '../components/login';

class App extends React.Component {

	componentWillMount() {
		this.lock = new Auth0Lock('wHujUxG1opUJsGK7lxTU2MCoOSumzrdH', 'valorl.eu.auth0.com');
		console.log(this.lock);

		this.setState({idToken: this.getIdToken()});
	}


	getIdToken() {
		var idToken = localStorage.getItem('userToken');
		var authHash = this.lock.parseHash(window.location.hash);
		console.log(authHash);
		if (!idToken && authHash) {
			if (authHash.id_token) {
				idToken = authHash.id_token
				localStorage.setItem('userToken', authHash.id_token);
				if(authHash.profile) {
					localStorage.setItem('userId', authHash.profile.sub.split("|")[1]);
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

		if(this.state.idToken) {
			let childrenWithProps  = React.Children.map(this.props.children, (child) => {
				return React.cloneElement(child, {idToken: this.state.idToken});
			});

			return (
				<div className="main-container">
					{childrenWithProps}
				</div>
			);
		} else {
			return (  
				<div className="main-container">
					<Login lock={this.lock}/>
				</div>
			);
		}
		
	}
}

App.path = '/';

export default App;

