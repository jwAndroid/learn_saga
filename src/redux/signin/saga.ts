import {PayloadAction} from '@reduxjs/toolkit';
import {all, call, delay, fork, put, takeLatest} from 'redux-saga/effects';

import client from '../client';
import {signInFailure, signInRequest, signInSuccess} from './slice';
import {ISignInRequest, ISignInSuccess} from './interface';

const signInApi = (email: string | null, password: string) => {
  return client.post<ISignInSuccess>('/api/auth/member', {
    email,
    password,
  });
};

function* signIn(action: PayloadAction<ISignInRequest>) {
  try {
    const {data} = yield call(
      signInApi,
      action.payload.email,
      action.payload.password,
    );

    yield delay(200);

    yield put(signInSuccess(data));
  } catch (e) {
    yield put(signInFailure());
  }
}

function* watchSignIn() {
  yield takeLatest(signInRequest.type, signIn);
}

export default function* signInSaga() {
  yield all([fork(watchSignIn)]);
}
