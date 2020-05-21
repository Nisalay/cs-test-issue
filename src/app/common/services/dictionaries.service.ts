import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { sideNavMock } from '@app-common/mocks/side-nav';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  constructor() { }

  getSideNavItems(): Observable<SideNavItemDTO[]> {
    return of(sideNavMock);
  }
}
