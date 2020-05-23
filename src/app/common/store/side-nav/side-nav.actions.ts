import { createAction, props } from '@ngrx/store';

export enum SideNavActionsTypes {
  ReadSideNavItems = '[SideNav] ReadSideNavItems',
  SetSideNavItems = '[SideNav] SetSideNavItems',
  SetSelectedSideNavItem = '[SideNav] SetSelectedSideNavItem',
}

export const ReadSideNavItems = createAction(
  SideNavActionsTypes.ReadSideNavItems,
);

export const SetSideNavItems = createAction(
  SideNavActionsTypes.SetSideNavItems,
  props<{ sideNavItems: SideNavItemDTO[] }>()
);

export const SetSelectedSideNavItem = createAction(
  SideNavActionsTypes.SetSelectedSideNavItem,
  props<{ selectedItemCode: string }>()
)
