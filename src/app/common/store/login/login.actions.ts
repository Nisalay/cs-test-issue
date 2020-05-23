import { createAction, props } from '@ngrx/store';

export enum LoginActionsTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginError = '[Login] LoginError',
  SetLoginData = '[Login] SetLoginData',
  SetLoginInitialState = '[Login] SetLoginData',
}

export const Login = createAction(
  LoginActionsTypes.Login,
  props<{ username: string; password: string }>()
)

export const Logout = createAction(
  LoginActionsTypes.Logout
)

export const SetLoginData = createAction(
  LoginActionsTypes.SetLoginData,
  props<LoginDTO>()
)

export const LoginError = createAction(
  LoginActionsTypes.LoginError,
  props<StateErrorDTO>()
)

export const SetLoginInitialState = createAction(
  LoginActionsTypes.SetLoginInitialState,
)
