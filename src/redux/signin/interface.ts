export interface ISignInRequest {
  email: string | null;
  password: string;
}

export interface ISignInSuccess {
  id: number;
  email: string;
  accessToken: string;
}

export interface IState {
  isLoading: boolean;
  password: string;
  isSignInSuccess: boolean | null;
  email: string | null;
  id: number;
  accessToken: string;
}
