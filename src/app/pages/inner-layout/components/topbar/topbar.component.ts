import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromSelectors from '@app-common/store/selectors'
import { Observable } from 'rxjs';
import { Logout } from '@app-common/store/login/login.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  /** текущий элемент списка */
  public selectSideNavItem$: Observable<SideNavItemDTO>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.selectSideNavItem$ = this.store.pipe(
        select(fromSelectors.sideNav.selectSideNavItem)
      )
  }

  /**
   * Выход из системы
   */
  public logout() {
    this.store.dispatch(Logout());
  }

}
