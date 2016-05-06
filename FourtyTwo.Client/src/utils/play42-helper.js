import math from 'mathjs';
import PlayTimer from './play-timer.js';

import { PLAY_CONFIG } from '../config.js';

const _operationTypes = [
			{ sign: '+', type: 'addition'},
			{ sign: '-', type: 'substraction'}
];

class Play42Helper {
	static get operationTypes() { return _operationTypes }

	static randomQuestion() {
		let n1 = math.round(math.randomInt(PLAY_CONFIG.MIN_NUMBER,PLAY_CONFIG.MAX_NUMBER));
		let n2 = math.round(math.randomInt(PLAY_CONFIG.MIN_NUMBER,PLAY_CONFIG.MAX_NUMBER));
		let operation = math.pickRandom(PLAY_CONFIG.OPERATION_TYPES);

		const question = {
			n1: n1,
			n2: n2,
			operation: operation,
			answer: ''
		}

		return question;
	}

	static evaluateQuestion(question) {
		console.log('evaluateQuestion question:');
		console.log(question);
		console.log(typeof question);
		if(!question) throw "Play42 evalute: 'question' parameter is null";
		if(!question.n1 || !question.n2 || !question.operation) throw "Play42 evaluate: Null or invalid question attributes";
		if(!question.answer || question.answer.length < 1) throw "Play42 evaluate: No answer in 'question'";

		const solution = math.eval(`${question.n1} ${question.operation.sign} ${question.n2}`);
		return question.answer === solution;
	}

	static calculateAccuracy(questions) {
		if(!questions || !questions.length >0) throw "NullOrEmptyArrayException (calculateAccuracy)";
		const evaluateQuestion = Play42Helper.evaluateQuestion;
		const accFloat = questions.filter(q => 
			{ 
				return evaluateQuestion(q); 
			}).length / questions.length * 100;
		return math.round(accFloat);
	}

	static countCorrect(questions) {
		if(!questions || !questions.length >0) throw "NullOrEmptyArrayException (countCorrect)";

		const evaluateQuestion = Play42Helper.evaluateQuestion;
		return questions.filter(q => 
			{ 
				return evaluateQuestion(q); 
			}).length;
	}

	static countIncorrect(questions) {
		return questions.length - this.countCorrect(questions);
	}
}

export default Play42Helper;