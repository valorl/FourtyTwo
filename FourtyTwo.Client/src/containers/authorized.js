import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { logout } from '../actions';

import HeaderBar from './header-bar';
import LinearProgress from 'material-ui/lib/linear-progress';
import { red600 } from 'material-ui/lib/styles/colors';

class Authorized extends React.Component {
  constructor(props) {
  	super(props);
  	this.styles = {
  		linearProgress: {
  			backgroundColor: 'transparent'
  		}
  	}

    this.handleDashboardClicked = this.handleDashboardClicked.bind(this);
    this.handlePracticeClicked = this.handlePracticeClicked.bind(this);
    this.handleLogoutClicked = this.handleLogoutClicked.bind(this);
  }

  handleDashboardClicked() {
    browserHistory.push('/app/dashboard');
  }
  handlePracticeClicked() {
    browserHistory.push('/app/play');
  }
  handleLogoutClicked() {
    this.props.logout();
  }

  render() {
    return (
    	<div>
          <HeaderBar
            profile={this.props.profile}
            handleDashboard={this.handleDashboardClicked}
            handlePractice={this.handlePracticeClicked}
            handleLogout={this.handleLogoutClicked}/>
          {this.props.isLoading ?
            <LinearProgress mode="indeterminate"
              style={this.styles.linearProgress}
              color={red600}/> : null}
          {this.props.children}
    	</div>
    );
  }
}

Authorized.path = "/";

const mapStateToProps = (state) => {
	return {
		isLoading: state.loading.isLoading,
    profile: state.auth.profile
	}
}

export default connect(mapStateToProps, { logout })(Authorized);
