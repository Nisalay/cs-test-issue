import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { sideNavMock } from '@app-common/mocks/side-nav';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  constructor() { }

  /**
   * Получение списка бокового меню целиком
   * @return - замоканное меню
   */
  public getSideNavItems(): Observable<SideNavItemDTO[]> {
    return of(sideNavMock);
  }
}
