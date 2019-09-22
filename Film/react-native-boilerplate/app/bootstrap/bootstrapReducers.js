import { combineReducers } from 'redux';
import { authReducers, sessionReducers } from '../modules/auth/authReducers';
import { mainReducers } from '../modules/main/mainReducers';

const bootstrapReducers = combineReducers({
  auth: authReducers,
  session: sessionReducers,
  main: mainReducers,
});

export default bootstrapReducers;
