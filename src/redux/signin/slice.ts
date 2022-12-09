import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {applyToken} from '../client';

import {ISignInRequest, ISignInSuccess, IState} from './interface';

const initialState: IState = {
  isLoading: false,
  id: -1,
  email: null,
  password: '',
  isSignInSuccess: null,
  accessToken: '',
};

const signInSilce = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signInReset: state => {
      state.isLoading = false;
      state.email = '';
      state.password = '';
      state.isSignInSuccess = null;
      state.accessToken = '';
    },
    signInRequest: (state, action: PayloadAction<ISignInRequest>) => {
      state.isLoading = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isSignInSuccess = null;
      state.accessToken = '';
    },
    signInSuccess: (state, action: PayloadAction<ISignInSuccess>) => {
      state.isLoading = false;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;

      if (action.payload.accessToken !== '') {
        applyToken(action.payload.accessToken);
      }
    },
    signInFailure: state => {
      state.isLoading = false;
      state.isSignInSuccess = null;
      state.accessToken = '';
    },
  },
});

export const {signInReset, signInRequest, signInSuccess, signInFailure} =
  signInSilce.actions;

export default signInSilce.reducer;
