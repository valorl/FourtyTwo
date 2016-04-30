import React from 'react';
import HeaderBar from './header-bar';

class DashboardPage extends React.Component {
  render() {
    return (
    	<div>
      		<div className="dashboard-container">
      			<p>{this.props.idToken}</p>
  
      			<button onClick={() =>  { localStorage.removeItem('userToken'); this.props.history.push('/');}}>
      				LOGOUT
      			</button>
      		</div>
    	</div>
    );
  }
}

DashboardPage.path = "/dashboard";

export default DashboardPage;



