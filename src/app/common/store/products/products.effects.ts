import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsActionTypes, SetProductsSuccess } from '@app-common/store/products/product.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProductsService } from '@app-common/services/products.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  @Effect()
  readProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.ReadProducts),
    switchMap(({ categoryName }) => {
      return this.productService.getProducts(categoryName)
        .pipe(
          map((products: ProductDTO[]) => SetProductsSuccess({ products }))
        )
    })
  )
}
