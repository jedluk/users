import { combineReducers } from 'redux';
import authReducer from '../src/app/home/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;