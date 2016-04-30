import React from 'react';

import AppBar from 'material-ui/lib/app-bar';

export default class HeaderBar extends React.Component {

  componentWillMount() {
  	this.styles = {
  		appBar: {
  			backgroundColor: '#66BB6A'
  		}
  	}
  }

  render() {
    return (
      <AppBar 
      	className="header-bar"
      	style={this.styles.appBar}
      	title={<span className="app-bar-text">4ourty 2wo</span>}
      />
    );
  }
}





