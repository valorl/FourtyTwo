import axios from 'axios';
import { API_HOSTNAME } from '../config';

class Api42	 {
	static get idToken() { return localStorage.getItem('id_token'); };
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

	static getExercises() {
		return axios.get(API_HOSTNAME + 'exercises', this.config);
	}

	static postExercise(exercise) {
		this.checkExercise(exercise);
		return axios.post(API_HOSTNAME + 'exercises', exercise, this.config);
	}
}

export default Api42;
