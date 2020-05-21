import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SetSideNavItems, SideNavActionsTypes } from '@app-common/store/side-nav/side-nav.actions';
import { DictionariesService } from '@app-common/services/dictionaries.service';

@Injectable()
export class SideNavEffects {
  constructor(
    private actions$: Actions,
    private dictionariesService: DictionariesService
  ) {}

  @Effect()
  readSideNav$ = this.actions$.pipe(
    ofType(SideNavActionsTypes.ReadSideNavItems),
    switchMap(() => this.dictionariesService.getSideNavItems()
      .pipe(
        map((sideNavItems: SideNavItemDTO[]) => SetSideNavItems({ sideNavItems }))
      ))
  )
}
