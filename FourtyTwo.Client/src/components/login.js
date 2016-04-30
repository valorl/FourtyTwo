import React from 'react';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';




class Login extends React.Component {
 	componentDidMount() {
 		this.renderLogin();
 	}

 	renderLogin() {
 		this.props.lock.show({
 			container: 'login-form-a0',
 			disableSignupAction: true, disableResetAction: true,
 			mode: 'signin',
 			connections: ['facebook', 'google-oauth2'],

 		});
 	}

 	render() {
    	return (
    		<div className="login-container">
		    	<Paper className="login-header row" zDepth={2} style={{backgroundColor: Colors.green400}}>
			    	<div className="heading-wrapper col-md-6">
						<h2>4ourty 2wo</h2>
			    		<p>Fun way to practice arithmetics!</p>
			    	</div>
			    	<div id="login-form-a0" className="col-md-6">
			    	</div>
	    		</Paper>
    			
    		</div>
    	);
  	}
}

Login.path = "/login";

export default Login;
// <RaisedButton className="login-button" label="Login and try it out" onClick={this.handleLoginClick} style={this.styles.loginButton}/>
