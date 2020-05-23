import { Action, createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';
import * as loginActions from '@app-common/store/login/login.actions';

const initialState: AppState['products'] = {
  pending: false,
  data: null
}

const productsReducer = createReducer(
  initialState,
  on(productActions.CreateProduct, (state) => ({ ...state, pending: true })),
  on(productActions.ReadProducts, (state) => ({ ...state, pending: true })),
  on(productActions.UpdateProduct, (state) => ({ ...state, pending: true })),
  on(productActions.SetProductsSuccess, (state, { products }) => ({
    ...state,
    pending: false,
    data: products
  })),
  on(productActions.SetProductsInitialState, () => ({
    ...initialState
  }))
);

export function reducer(state: StoreStateDTO<ProductDTO[]> | undefined, action: Action) {
  return productsReducer(state, action);
}
