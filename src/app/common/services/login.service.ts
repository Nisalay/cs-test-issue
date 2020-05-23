import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { loginMock } from '@app-common/mocks/login';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login({ username, password }: AuthorizationDataDTO): Observable<LoginDTO | StateErrorDTO> {
    if (username === 'admin' && password === 'admin') {
      return of(loginMock)
    } else {
      return throwError({
        details: 'Неверные логин или пароль'
      } as StateErrorDTO)
    }
  }

  public logout(): Observable<any> {
    return of({})
  }
}
