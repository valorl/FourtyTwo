import { combineReducers } from 'redux';
import LoadingReducer from './loading-reducer';
import AuthReducer from './auth-reducer';


const rootReducer = combineReducers({
  loading: LoadingReducer,
  auth: AuthReducer
});

export default rootReducer;
