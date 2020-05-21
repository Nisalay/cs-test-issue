import { Action, createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';

const initialState: StoreStateDTO<ProductDTO[]> = {
  pending: false,
  data: null
}

const productsReducer = createReducer(
  initialState,
  on(productActions.ReadProducts, (state) => ({ ...state, pending: true })),
  on(productActions.SetProductsSuccess, (state, { products }) => ({ ...state, data: products }))
);

export function reducer(state: StoreStateDTO<ProductDTO[]> | undefined, action: Action) {
  return productsReducer(state, action);
}
