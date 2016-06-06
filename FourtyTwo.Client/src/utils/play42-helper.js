import math from 'mathjs';
import PlayTimer from './play-timer.js';

import { PLAY_CONFIG } from '../config.js';

class Play42Helper {
	static randomQuestion() {
		let n1 = math.round(math.randomInt(PLAY_CONFIG.MIN_NUMBER,PLAY_CONFIG.MAX_NUMBER));
		let n2 = math.round(math.randomInt(PLAY_CONFIG.MIN_NUMBER,PLAY_CONFIG.MAX_NUMBER));
		let operation = math.pickRandom(PLAY_CONFIG.OPERATION_TYPES);

		const question = {
			numbers: [n1, n2],
			operation: operation,
			answer: ''
		}
		return question;
	}

	static evaluateQuestion(question) {
		console.log('evaluateQuestion question:');
		console.log(question);
		console.log(typeof question);
		if(!question) throw "InvalidParameterException in Play42 evaluate: 'question' parameter is undefined";
		if(!question.numbers) throw "InvalidParameterException in Play42 evaluate: 'question.numbers' is undefined";
		if(!question.numbers.length > 0) throw "InvalidParameterException in Play42 evaluate: 'question.numbers' is empty";
		if(question.answer.length < 1) throw "Play42 evaluate: No answer in 'question'";

		const expr = question.numbers.join(question.operation.sign);

		const solution = math.eval(expr);
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
