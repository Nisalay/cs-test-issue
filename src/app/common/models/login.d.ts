/**
 * Данные возвращаемые при авторизации
 * @property access_token - токен авторизации
 */
declare interface LoginDTO {
  access_token: string;
}

/**
 * Данные, отправляемые пользователем при попытке авторизации
 * @property username - имя пользователя
 * @property password - пароль
 */
declare interface AuthorizationDataDTO {
  username: string;
  password: string;
}

