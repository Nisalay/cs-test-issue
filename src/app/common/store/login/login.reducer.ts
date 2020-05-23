import { Action, createReducer, on } from '@ngrx/store';
import * as loginActions from './login.actions';

const initialState: AppState['login'] = {
  pending: false,
  data: null,
  error: null,
}

const productsReducer = createReducer(
  initialState,
  on(loginActions.Login, (state) => ({ ...state, pending: true })),
  on(loginActions.Logout, (state) => ({ ...state, pending: true })),
  on(loginActions.SetLoginData, (state, { type, ...data }) => ({
    ...state,
    data,
    pending: false,
  })),
  on(loginActions.LoginError, (state, { type, ...error }) => ({
    ...state,
    error,
    pending: false,
  })),
  on(loginActions.SetLoginInitialState, () => ({
    ...initialState
  }))
);

export function reducer(state: AppState['login'] | undefined, action: Action) {
  return productsReducer(state, action);
}
