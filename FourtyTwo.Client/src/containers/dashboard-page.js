import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import HeaderBar from './header-bar';
import { logout } from '../actions';


class DashboardPage extends React.Component {
  render() {
    return (
    	<div>
      		<div className="dashboard-container">
      			<p>{this.props.idToken}</p>
  
      			<button onClick={() =>  {this.props.dispatch(logout())}}>
      				LOGOUT
      			</button>
      		</div>
    	</div>
    );
  }
}

DashboardPage.path = "/dashboard";

export default connect()(DashboardPage);



