import { combineReducers } from 'redux';
import LoadingReducer from './loading-reducer';
import AuthReducer from './auth-reducer';
import ExerciseReducer from './exercise-reducer';


const rootReducer = combineReducers({
  loading: LoadingReducer,
  auth: AuthReducer,
  exercise: ExerciseReducer
});

export default rootReducer;
