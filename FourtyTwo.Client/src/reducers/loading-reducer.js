import { SET_IS_LOADING } from '../actions/consts';

const loading = (state = {isLoading: false}, action) => {
	switch(action.type) {
		case SET_IS_LOADING:
			console.log('case SET_IS_LOADING');
			return { ...state, isLoading: action.flag }
		default:
			console.log('case default');
			return state;
	}
}

export default loading;