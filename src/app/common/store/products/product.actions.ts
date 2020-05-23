import { createAction, props } from '@ngrx/store';

export enum ProductsActionTypes {
  CreateProduct = '[Products] CreateProduct',
  ReadProducts = '[Products] ReadProducts',
  UpdateProduct = '[Products] UpdateProduct',
  DeleteProduct = '[Products] DeleteProduct',
  SetProductsSuccess = '[Products] SetProductsSuccess',
  SetProductsInitialState = '[Products] SetInitialState',
}

/**
 * Action запроса к сервису при добавлении продукта
 */
export const CreateProduct = createAction(
  ProductsActionTypes.CreateProduct,
  props<ProductDTO>()
);

/**
 * Action запроса к сервису при получении продуктов
 */
export const ReadProducts = createAction(
  ProductsActionTypes.ReadProducts,
  props<ReadProductsDTO>()
);

/**
 * Action запроса к сервису при изменении продукта
 */
export const UpdateProduct = createAction(
  ProductsActionTypes.UpdateProduct,
  props<ProductDTO>()
);

/**
 * Action запроса к сервису при удалении продукта
 */
export const DeleteProduct = createAction(
  ProductsActionTypes.DeleteProduct,
  props<DeleteProductDTO>()
);

/**
 * Action добавления продуктов в стору
 */
export const SetProductsSuccess = createAction(
  ProductsActionTypes.SetProductsSuccess,
  props<{ products: ProductDTO[] }>()
);

/**
 * Action очистки
 */
export const SetProductsInitialState = createAction(
  ProductsActionTypes.SetProductsInitialState,
);
