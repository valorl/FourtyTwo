import { LOCK_SUCCESS } from '../actions/consts';

const INITIAL_STATE = {
	authenticated: false
}

const auth = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LOCK_SUCCESS:
			return {
				...state,
				authenticated:true,
				idToken: action.token,
				profile: action.profile
			}
		default:
			return state;
	}
}

export default auth;
