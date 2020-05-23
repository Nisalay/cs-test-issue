import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoginService } from '@app-common/services/login.service';
import {
  LoginActionsTypes,
  LoginError,
  SetLoginData,
  SetLoginInitialState
} from '@app-common/store/login/login.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(LoginActionsTypes.Login),
    switchMap(({ type, ...params }: ActionPayloadDTO<AuthorizationDataDTO>) =>
      this.loginService.login(params)
        .pipe(
          tap(console.log),
          tap((login: LoginDTO) => sessionStorage.setItem('access_token', login.access_token)),
          tap((login: LoginDTO) => this.router.navigate(['products'])),
          map((login: LoginDTO) => SetLoginData(login)),
          catchError((error: StateErrorDTO) => of(LoginError(error)))
        ))
  )

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(LoginActionsTypes.Logout),
    switchMap(() => this.loginService.logout()),
    tap(() => this.router.navigate(['login'])),
    tap(() => sessionStorage.removeItem('access_token')),
    map(() => SetLoginInitialState()),
  )
}
