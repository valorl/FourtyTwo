import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';

export default class HeaderBar extends React.Component {

  componentWillMount() {
  	this.styles = {
  		appBar: {
  			backgroundColor: '#66BB6A'
  		},
      ghButton: {
        padding: 5
      },
      ghIcon: {
        fontSize: 30,
        color: 'white'
      }

  	}
  }

  render() {
    return (
      <AppBar 
      	className="header-bar"
      	style={this.styles.appBar}
      	title={<span className="app-bar-text">4ourty 2wo</span>}
        iconElementRight={
          <a href="https://github.com/valorl/FourtyTwo" target="_blank">
            <IconButton
              style={this.styles.ghButton}
              iconStyle={this.styles.ghIcon}
              iconClassName="fa fa-github" tooltip="Visit this project @ github"
              tooltipPosition="bottom-left"
              />
          </a>
          }
      />
    );
  }
}





