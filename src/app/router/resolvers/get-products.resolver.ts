import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { ReadProducts } from '@app-common/store/products/product.actions';

@Injectable()
export class GetProductsResolver implements Resolve<boolean> {
  constructor(
    private store: Store<AppState>
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): boolean {
    this.store.dispatch(ReadProducts({ categoryName: route.params[RouteParamsKeys.CategoryName] }));
    return true;
  }
}
