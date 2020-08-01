import { combineReducers } from 'redux';
import authReducer from './app/reducers/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
