import {
	SET_IS_LOADING,
	FETCH_EXERCISES,
	STORE_EXERCISES,
	SHOW_LOCK,
	LOCK_SUCCESS,
	LOCK_ERROR,
	LOGOUT } from './consts';

import Api42 from '../utils/fourty-two-api';
import Auth0Lock from 'auth0-lock';

import { browserHistory } from 'react-router';


//AUTH0
//  -- LOGIN
export const login = () => {
	const lock = new Auth0Lock('wHujUxG1opUJsGK7lxTU2MCoOSumzrdH', 'valorl.eu.auth0.com');
	const options = {
		connections: ['google-oauth2','facebook'],
		dict : {
			title: "Please log in."
		},
		closable: false,
		socialBigButtons: true,
		popup: true,
		rememberLastLogin: true
	};
	return dispatch => {
		lock.showSignin(options, (err,profile,token) => {
			if(err) {
				authError(error);
				return
			}
			localStorage.setItem('profile', JSON.stringify(profile));
			localStorage.setItem('id_token', token);
			dispatch(lockSuccess(profile,token));
		});
	}
}

export const logout = () => {
	return dispatch => {
		dispatch(setIsLoading(true));
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		dispatch(setIsLoading(false));
		setRoute('/login');
		return {
			type: LOGOUT,
			profile: null,
			idToken: null
		}
	}
}

export const rehydrateAuth = () => {
	return dispatch => {
		const token = localStorage.getItem('id_token');
		const profile = localStorage.getItem('profile');
		if(!token) {
			authError('Rehydrate auth: no token.');
			return
		}
		if(!profile) {
			authError('Rehydrate auth: no token no profile');
			return
		}
		dispatch(lockSuccess(profile,token));
	}
}

export const lockSuccess = (profile,token) => {
	console.log('lockSuccess action start');
	console.log(profile);
	console.log(token);
	setRoute('/app/dashboard');
	return {
		type: LOCK_SUCCESS,
		profile,
		token
	}
}



// API CALLS
export const postExercise = (exercise) => {
	return dispatch => {
		dispatch(setIsLoading(true));
		return Api42.postExercise(exercise).then(
			newExercise => {
				console.log(newExercise.data);
				dispatch(setIsLoading(false));
				setRoute('/dashboard');
			},
			error => {
				console.log('error');
				console.log(error);
				dispatch(setIsLoading(false));
			}
		);
	}
}

// HELPER ACTIONS
export const setIsLoading = (flag) => {
	return {
		type: SET_IS_LOADING,
		flag
	}
}

// private
const setRoute = (route) => {
	browserHistory.push(route);
}
const authError = (error) => {
	setRoute('/login');
	console.log('authError called with:');
	console.log(error);
}
