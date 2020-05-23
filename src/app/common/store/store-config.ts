import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ProductsEffects } from '@app-common/store/products/products.effects';
import { SideNavEffects } from '@app-common/store/side-nav/side-nav.effects';
import { LoginEffects } from '@app-common/store/login/login.effects';
import * as fromReducers from './reducers';

export const reducers: ActionReducerMap<AppState> = {
  products: fromReducers.products.reducer,
  sideNav: fromReducers.sideNav.reducer,
  login: fromReducers.login.reducer
};

export const metaReducers: MetaReducer<AppState>[] = [];

export const effects = [
  ProductsEffects,
  SideNavEffects,
  LoginEffects,
];
