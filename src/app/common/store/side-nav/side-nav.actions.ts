import { createAction, props } from '@ngrx/store';

export enum SideNavActionsTypes {
  ReadSideNavItems = '[SideNav] ReadSideNavItems',
  SetSideNavItems = '[SideNav] SetSideNavItems',
  SetSelectedSideNavItem = '[SideNav] SetSelectedSideNavItem',
  SetSideNavInitialState = '[SideNav] SetSideNavInitialState',
}

/**
 * Action запроса к сервису при получении списка бокового меню
 */
export const ReadSideNavItems = createAction(
  SideNavActionsTypes.ReadSideNavItems,
);

/**
 * Action добавления списка меню в стору
 */
export const SetSideNavItems = createAction(
  SideNavActionsTypes.SetSideNavItems,
  props<{ sideNavItems: SideNavItemDTO[] }>()
);

/**
 * Action установки выбранного элемента списка меню
 */
export const SetSelectedSideNavItem = createAction(
  SideNavActionsTypes.SetSelectedSideNavItem,
  props<{ selectedItemCode: string }>()
)

/**
 * Action очистки
 */
export const SetSideNavInitialState = createAction(
  SideNavActionsTypes.SetSideNavInitialState
)
