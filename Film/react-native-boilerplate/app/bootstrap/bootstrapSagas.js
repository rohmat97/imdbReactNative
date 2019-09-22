import { all } from 'redux-saga/effects';
import auth from '../modules/auth/authSagas';
import main from '../modules/main/mainSagas';

function* bootstrapSagas() {
  yield all([...auth, ...main]);
}

export default bootstrapSagas;
