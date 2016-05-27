import React from 'react';
import { connect } from 'react-redux';
import { setIsLoading } from '../actions';

import HeaderBar from './header-bar';
import LinearProgress from 'material-ui/lib/linear-progress';


class Authorized extends React.Component {
  constructor(props) {
  	super(props);
  	this.styles = {
  		linearProgress: {
  			backgroundColor: 'transparent'
  		}
  	}
  }

  render() {
    return (
    	<div>
          <HeaderBar profile={this.props.profile}/>
          {this.props.isLoading ? <LinearProgress mode="indeterminate" style={this.styles.linearProgress}/> : null}
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

export default connect(mapStateToProps)(Authorized);
