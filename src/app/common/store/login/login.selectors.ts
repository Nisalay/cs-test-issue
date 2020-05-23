import { createSelector } from '@ngrx/store';

const selectLoginStore = (state: AppState) => state.login;

export const selectLoginError = createSelector(
  selectLoginStore,
  (state: AppState['login']) => state.error
)
