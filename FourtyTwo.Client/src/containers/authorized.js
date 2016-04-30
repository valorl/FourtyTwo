import React from 'react';
import HeaderBar from './header-bar';

class Authorized extends React.Component {
  render() {
    return (
    	<div>
          <HeaderBar />
          {this.props.children}
    	</div>
    );
  }
}

Authorized.path = "/";

export default Authorized;



