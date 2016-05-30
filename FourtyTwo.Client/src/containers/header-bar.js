import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Avatar from 'material-ui/lib/avatar';
import Divider from 'material-ui/lib/divider';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DashboardIcon from 'material-ui/lib/svg-icons/action/dashboard';
import PlayIcon from  'material-ui/lib/svg-icons/av/play-arrow';
import LogoutIcon from 'material-ui/lib/svg-icons/action/power-settings-new';
import {green600, grey600} from 'material-ui/lib/styles/colors';




class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
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
      },
      leftNav: {
        header: {
          height: 230,
          backgroundColor: '#66BB6A'
        },
        avatarWrapper: {
          padding: '15px 0 15px 90px'
        },
        nameWrapper: {
          padding: 15,
          textAlign: 'center',
          color: 'white',
          padding: '0 15px 15px 15px'
        }
      }

  	}
  }

  handleItemClicked(callback) {
    this.setState({open: false},callback);
  }

  renderNav() {
    return (
      <LeftNav
        docked={false}
        width={280}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
        <div style={this.styles.leftNav.header}>
          <div style={this.styles.leftNav.avatarWrapper}>
            <Avatar
              src={this.props.profile.picture}
              size={100} />
          </div>
          <div style={this.styles.leftNav.nameWrapper}>
            <h3>{this.props.profile.name}</h3>
            <p>{this.props.profile.email}</p>
          </div>
        </div>
        <MenuItem
          leftIcon={<DashboardIcon color={green600}/>}
          onTouchTap={() => this.handleItemClicked(this.props.handleDashboard)}
          >
          Dashboard
        </MenuItem>
        <MenuItem
          leftIcon={<PlayIcon color={green600}/>}
          onTouchTap={() => this.handleItemClicked(this.props.handlePractice)}>
          Practice
        </MenuItem>
        <Divider/>
        <MenuItem
          leftIcon={<LogoutIcon color={grey600}/>}
          onTouchTap={() => this.handleItemClicked(this.props.handleLogout)}>
          Logout
        </MenuItem>
      </LeftNav>
    );
  }

  render() {
    return (
      <div>
        <AppBar
        	className="header-bar"
        	style={this.styles.appBar}
        	title={<span className="app-bar-text">4ourty 2wo</span>}
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
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
      {this.props.profile ? this.renderNav() : null}

    </div>
    );
  }
}

export default HeaderBar;
