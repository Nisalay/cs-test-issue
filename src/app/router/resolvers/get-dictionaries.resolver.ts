import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { ReadSideNavItems } from '@app-common/store/side-nav/side-nav.actions';

@Injectable()
export class GetDictionariesResolver implements Resolve<boolean> {
  constructor(
    private store: Store<AppState>
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): boolean {
    this.store.dispatch(ReadSideNavItems());
    return true;
  }
}
