import {combineReducers} from '@reduxjs/toolkit';
import {all, fork} from 'redux-saga/effects';

import {signIn, signInSaga} from './signin';

const rootReducer = combineReducers({
  signIn,
});

export function* rootSaga() {
  yield all([fork(signInSaga)]);
}

export default rootReducer;
