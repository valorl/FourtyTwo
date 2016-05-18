import axios from 'axios';
import { API_HOSTNAME } from '../config';

const _idToken = localStorage.getItem('id_token');
const _userId = localStorage.getItem('user_id');

class Api42	 {
	static get idToken() { return _idToken };
	static get userId() { return _userId };
	static get config() { 
		return { 
			headers: {
				'Authorization': `Bearer ${this.idToken}`
			}
		}
	}

	static checkExercise(exercise) {
		if(!exercise) throw "ExerciseModelNullException in checkExercise";

		const props = ['score', 'questions', 'accuracy'];

		props.forEach(p => {
			if (!exercise.hasOwnProperty(p)) throw `ExerciseModelInvalidException: property '${p}' missing`;
		});
	}

	static postExercise(exercise) {
		this.checkExercise(exercise);
		return axios.post(API_HOSTNAME + 'exercises', exercise, this.config);
	}
}

export default Api42;