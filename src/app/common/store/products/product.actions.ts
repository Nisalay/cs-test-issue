import { createAction, props } from '@ngrx/store';

export enum ProductsActionTypes {
  CreateProduct = '[Products] CreateProduct',
  ReadProducts = '[Products] ReadProducts',
  DeleteProduct = '[Products] DeleteProduct',
  SetProductsSuccess = '[Products] SetProductsSuccess'
}

export const CreateProduct = createAction(
  ProductsActionTypes.CreateProduct,
  props<ProductDTO>()
);

export const ReadProducts = createAction(
  ProductsActionTypes.ReadProducts,
  props<ReadProductsDTO>()
);

export const DeleteProduct = createAction(
  ProductsActionTypes.DeleteProduct,
  props<DeleteProductDTO>()
);

export const SetProductsSuccess = createAction(
  ProductsActionTypes.SetProductsSuccess,
  props<{ products: ProductDTO[] }>()
);
