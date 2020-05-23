import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, first, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromSelectors from '@app-common/store/selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  public currentCategory$: Observable<string>;
  public selectSideNavItem$: Observable<SideNavItemDTO>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(fromSelectors.sideNav.selectSideNav),
      first(),
    ).subscribe()

    this.currentCategory$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url.split('/').pop())
      )

    this.selectSideNavItem$ = this.store
      .pipe(
        select(fromSelectors.sideNav.selectSideNavItem)
      )
  }

}
