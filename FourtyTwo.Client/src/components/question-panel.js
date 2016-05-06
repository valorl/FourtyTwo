import React from 'react';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import Play42 from '../utils/play42-helper.js';


class QuestionPanel extends React.Component {

  constructor(props) {
  	super(props);
  	this.generateQuestion = this.generateQuestion.bind(this);
  	this.handleAnswerSubmitted = this.handleAnswerSubmitted.bind(this);
  	this.handleInputChanged = this.handleInputChanged.bind(this);

  }
  
  componentWillMount() {
  	this.setState({
      inputValue: '',
  	});

  	this.styles = {
  		mainPaper: {
	  		height: 250,
	  		width: '100%',
     //    maxWidth: '100%',
	  		padding: 20,
	  		display: 'inline-block',
	  		textAlign: 'center',
	  		verticalAlign: 'middle'
  		},
  		textField: {
  			margin: 10,
        width: 300,
  		},
      textFieldInput: {
        WebkitBoxshadow: '0 0 0 1000px white inset'
      },
      textFieldHint: {
        zIndex: 1
      }
  	};
  }

  componentDidMount() {
  	console.log(this.state);
  }

  generateQuestion() {
  	const operationTypes = [
  		{ sign: '+', type: 'addition'},
  		{ sign: '-', type: 'substraction'}
  	];

  	let n1 = math.round(math.randomInt(100));
  	let n2 = math.round(math.randomInt(100));
  	let operation = math.pickRandom(operationTypes);

  	const currentQuestion = {
  		n1: n1,
  		n2: n2,
  		operation: operation,
  		evaluate: () => math.eval(`${n1} + ${n2}`),
  		answer: ''
  	}

  	return currentQuestion;
  }

  handleAnswerSubmitted(event) {
    event.preventDefault();

  	let { inputValue, currentQuestion, answeredQuestions} = this.state;
  	currentQuestion.answer = parseInt(inputValue);
    console.log('Calling handleStoreQuestion from handleAnswerSubmitted with:');
    console.log(currentQuestion);
    this.props.handleStoreQuestion(currentQuestion);

    if(currentQuestion.answer) {
      this.setState({ 
      currentQuestion: Play42.randomQuestion(),
      inputValue: '',
      });
    }


  	
  	// this.setState({ inputValue: 'refreshed' + math.randomInt(5)});
  }

  handleInputChanged(event) {
    console.log(/(^[0-9]+$|^$)/.test(event.target.value));
    if(/(^[0-9]+$|^$)/.test(event.target.value)) {
      this.setState({inputValue: event.target.value});
    }
    else return false;
  }

  // Generate first question
  start() {
    this.setState({
      currentQuestion: Play42.randomQuestion()
    });
  }

  setTextFieldFocus() {
    this.refs.TextField.focus();
  }
  
  render() {
  	const { currentQuestion } = this.state;

    return (
      	<div className="question-panel-container">
      		<Paper style={this.styles.mainPaper} zDepth={1}>
  	    		<div>
              <div className="question-expression">
                <span className="question-number">{currentQuestion ? currentQuestion.n1 : '..4'}</span>
                <span className="question-operation"> {currentQuestion ? currentQuestion.operation.sign : '.'} </span>
                <span className="question-number">{currentQuestion ? currentQuestion.n2 : '2..'}</span>
              </div>
              <form onSubmit={this.handleAnswerSubmitted}>
                <TextField 
                  ref="TextField"
                  style={this.styles.textField} 
                  inputStyle={this.styles.textFieldInput}
                  hintStyle={this.styles.textFieldHint}
                  hintText="Answer here" 
                  value={this.state.inputValue} 
                  onChange={this.handleInputChanged}
                  autoComplete="off"/>
              {/*<RaisedButton label="Answer" labelColor="white" backgroundColor="#66BB6A"/>*/}
              </form>

  	    		</div>
      			
      		</Paper>
      	</div>

    );
  }
}

export default QuestionPanel;



