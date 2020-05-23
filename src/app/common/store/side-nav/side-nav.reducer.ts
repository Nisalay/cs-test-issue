import { Action, createReducer, on } from '@ngrx/store';
import * as sideNavActions from './side-nav.actions';

const initialState: AppState['sideNav'] = {
  pending: false,
  data: null,
  selectedItemCode: null
}

const productsReducer = createReducer(
  initialState,
  on(sideNavActions.ReadSideNavItems, (state) => ({ ...state, pending: true })),
  on(sideNavActions.SetSideNavItems, (state, { sideNavItems }) => ({ ...state, data: sideNavItems })),
  on(sideNavActions.SetSelectedSideNavItem, (state, { selectedItemCode }) => ({
    ...state,
    selectedItemCode,
    pending: false,
  })),
  on(sideNavActions.SetSideNavInitialState, () => ({
    ...initialState
  }))
);

export function reducer(state: AppState['sideNav'] | undefined, action: Action) {
  return productsReducer(state, action);
}
