import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { loginMock } from '@app-common/mocks/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  /**
   * Авторизация
   * @param username - имя пользователя
   * @param password - пароль
   * @return - замоканные данные логина или ошибку авторизации, если логин и пароль !== 'admin'
   */
  public login({ username, password }: AuthorizationDataDTO): Observable<LoginDTO | StateErrorDTO> {
    if (username === 'admin' && password === 'admin') {
      return of(loginMock)
    } else {
      return throwError({
        details: 'Неверные логин или пароль'
      } as StateErrorDTO)
    }
  }

  /**
   * Разлогирование
   * @return - пустой объект
   */
  public logout(): Observable<any> {
    return of({})
  }
}
