import React from 'react';
import HeaderBar from './header-bar';
import QuestionPanel from '../components/question-panel';
import QuestionStatsPanel from '../components/question-stats-panel';


class Play extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: -1,
      questions: [],
      userId: localStorage.getItem('userId'),
      accuracy: -1
    };

    this.handleStoreQuestion = this.handleStoreQuestion.bind(this);
  }
  handleStoreQuestion(question) {
    const { questions } = this.state;

    console.log('handleStoreQuestion: question: ');
    console.log(question);
    if(question) {
      this.setState({
        questions: [questions, ...question]
      });
    }

  }

  render() {
    return (
    	<div className="play-container container">
      		<div className="col-sm-8">
            	<QuestionPanel handleStoreQuestion={this.handleStoreQuestion}/>
      		</div>
      		<div className="col-sm-4">
      			<QuestionStatsPanel />
      		</div>
    	</div>
    );
  }
}

Play.path = "/play";

export default Play;



