import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import { Login } from '@app-common/store/login/login.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromSelectors from '@app-common/store/selectors'
import { filter, first, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public error$: Observable<StateErrorDTO>;

  private subscription$: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })

    this.error$ = this.store.select(fromSelectors.login.selectLoginError);
  }

  public login() {
    this.store.dispatch(Login(this.form.value));
  }

}
