import { Action, createReducer, on } from '@ngrx/store';
import * as sideNavActions from './side-nav.actions';

const initialState: StoreStateDTO<SideNavItemDTO[]> = {
  pending: false,
  data: null
}

const productsReducer = createReducer(
  initialState,
  on(sideNavActions.ReadSideNavItems, (state) => ({ ...state, pending: true })),
  on(sideNavActions.SetSideNavItems, (state, { sideNavItems }) => ({ ...state, data: sideNavItems }))
);

export function reducer(state: StoreStateDTO<SideNavItemDTO[]> | undefined, action: Action) {
  return productsReducer(state, action);
}
