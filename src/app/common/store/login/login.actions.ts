import { createAction, props } from '@ngrx/store';

export enum LoginActionsTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginError = '[Login] LoginError',
  SetLoginData = '[Login] SetLoginData',
  SetLoginInitialState = '[Login] SetLoginInitialState',
}

/**
 * Action для авторизации
 */
export const Login = createAction(
  LoginActionsTypes.Login,
  props<AuthorizationDataDTO>()
)

/**
 * Action выхода из системы
 */
export const Logout = createAction(
  LoginActionsTypes.Logout
)

/**
 * Action для добавления данных в стору, в случае успеха
 */
export const SetLoginData = createAction(
  LoginActionsTypes.SetLoginData,
  props<LoginDTO>()
)

/**
 * Action для добавление данных об ошибке, в случае отказа
 */
export const LoginError = createAction(
  LoginActionsTypes.LoginError,
  props<StateErrorDTO>()
)

/**
 * Action очистки
 */
export const SetLoginInitialState = createAction(
  LoginActionsTypes.SetLoginInitialState,
)
