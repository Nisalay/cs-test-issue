import { createAction, props } from '@ngrx/store';

export enum SideNavActionsTypes {
  ReadSideNavItems = '[SideNav] ReadSideNavItems',
  SetSideNavItems = '[SideNav] SetSideNavItems'
}

export const ReadSideNavItems = createAction(
  SideNavActionsTypes.ReadSideNavItems,
);

export const SetSideNavItems = createAction(
  SideNavActionsTypes.SetSideNavItems,
  props<{ sideNavItems: SideNavItemDTO[] }>()
);
