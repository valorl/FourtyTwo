import { STORE_EXERCISES, STORE_CURRENT_EXERCISE } from '../actions/consts';
const INITIAL_STATE = {
	exercises: [],
  currentExercise: null
}
const exercise = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case STORE_EXERCISES:
			return {
				...state,
				exercises: action.exercises
			}
		case STORE_CURRENT_EXERCISE:
			return {
				...state,
				currentExercise: action.exercise
			}
		default:
			return state;
	}
}
export default exercise;
