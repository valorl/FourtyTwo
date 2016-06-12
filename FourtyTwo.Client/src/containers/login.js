import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

import { login } from '../actions';


class Login extends React.Component {
	constructor(props) {
		super(props);
	}

 	componentWillMount() {
 		this.styles = {
 			button: {
 				width: 150,
 			}
 		}
 	}

 	render() {
    	return (
    		<div className="login-container">
		    	<Paper className="login-header " zDepth={2} rounded={false} style={{backgroundColor: Colors.green400}}>
			    	<div className="heading-wrapper col-md-12">
						<h2>4orty 2wo</h2>
			    		<p>Fun way to practice arithmetics!</p>
			    		<RaisedButton
					    	label="Try it out!"
					    	backgroundColor={Colors.red400}
					    	style={this.styles.button}
					    	labelColor="#fff"
					    	onClick={this.props.login}
					    />
			    	</div>

	    		</Paper>

    		</div>
    	);
  	}
}

Login.path = "/login";

export default connect(null, { login })(Login);
// <RaisedButton className="login-button" label="Login and try it out" onClick={this.handleLoginClick} style={this.styles.loginButton}/>
