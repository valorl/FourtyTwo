import React from 'react';
import HeaderBar from './header-bar';
import QuestionPanel from '../components/question-panel';

class Play extends React.Component {
  render() {
    return (
    	<div className="container-fluid">
      		<div className="play-container col-sm-8">
            	<QuestionPanel />
      		</div>
    	</div>
    );
  }
}

Play.path = "/play";

export default Play;



