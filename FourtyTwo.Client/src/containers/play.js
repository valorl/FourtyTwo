import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import HeaderBar from './header-bar';
import QuestionPanel from '../components/question-panel';
import QuestionStatsPanel from '../components/question-stats-panel';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import Play42 from '../utils/play42-helper.js';
import PlayTimer from '../utils/play-timer.js';

import { postExercise } from '../actions/index';

import { PLAY_CONFIG } from '../config';



class Play extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem('userId'),
      score: -1,
      questions: [],
      accuracy: -1,
      time: {
        minutes: '00',
        seconds: '00'
      },
      dialogOpen: true
    };

    this.handleStoreQuestion = this.handleStoreQuestion.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleTimerTick = this.handleTimerTick.bind(this);
    this.handleTimerExpired = this.handleTimerExpired.bind(this);
    console.log("play constructor");
  }

  handleStoreQuestion(question) {
    let { questions } = this.state;

    console.log(questions);

    if(question) {
      questions = [...questions, question];
      const score = Play42.countCorrect(questions);
      const accuracy = Play42.calculateAccuracy(questions);
      console.log('handleStoreQuestion: accuracy ' + accuracy);
      this.setState({
        questions,
        score,
        accuracy
      }, () => {
        console.log('handleStoreQuestion: state after setState');
        console.log(this.state);
      });
    }
  }

  handleDialogClose() {

    // Close the dialog
    this.setState({
      dialogOpen: false,
    });
    // Start the timer
    let timer = new PlayTimer(PLAY_CONFIG.DURATION);
    timer.onTick(this.handleTimerTick).onExpired(this.handleTimerExpired).start();
    // Generate first question
    this.refs.QuestionPanel.start();
    // Focus the Text Field
    this.refs.QuestionPanel.setTextFieldFocus();
  }

  handleTimerTick(minutes, seconds) {
    this.setState({
      time: {
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
      }
    });
  }

  handleTimerExpired() {
    const { score, questions, userId, accuracy } = this.state;

    this.props.postExercise({
      score,
      questions,
      userId,
      accuracy
    });
    console.log('Time expired!');

    // Save exercise - API call
  }

  render() {

    const actions = [
      <FlatButton
        label="Play"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleDialogClose}
      />,
    ];


    return (
    	<div className="play-container container">
      		<div className="col-sm-8">
            	<QuestionPanel ref="QuestionPanel" handleStoreQuestion={this.handleStoreQuestion}/>
      		</div>
      		<div className="col-sm-4">
      			<QuestionStatsPanel
              timeLeft={this.state.time}
              answeredCount={this.state.questions.length}
              incorrectCount={this.state.score > -1 ? this.state.questions.length - this.state.score : 0}
              accuracy={this.state.accuracy} />
      		</div>

          <Dialog
            title="Are you ready?"
            actions={actions}
            modal={true}
            open={this.state.dialogOpen}
            onRequestClose={this.handleDialogClose}
          >
            <p> In the following exercise, you will have 1 minute to complete as many questions as possible.
            The questions consist of two randomly generated numbers between 10 and 100 that are supposed to be either added together or subtracted.<br/><br/>
             To begin the exercise session, start the timer by pressing PLAY.</p>
          </Dialog>
    	</div>
    );
  }
}

Play.path = "/play";

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

export default connect(null, { postExercise })(Play);
