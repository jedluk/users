import { combineReducers } from 'redux';
import authReducer from '../src/app/reducers/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;