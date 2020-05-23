import { createAction, props } from '@ngrx/store';

export enum ProductsActionTypes {
  CreateProduct = '[Products] CreateProduct',
  ReadProducts = '[Products] ReadProducts',
  UpdateProduct = '[Products] UpdateProduct',
  DeleteProduct = '[Products] DeleteProduct',
  SetProductsSuccess = '[Products] SetProductsSuccess',
  SetProductsInitialState = '[Products] SetInitialState',
}

export const CreateProduct = createAction(
  ProductsActionTypes.CreateProduct,
  props<ProductDTO>()
);

export const ReadProducts = createAction(
  ProductsActionTypes.ReadProducts,
  props<ReadProductsDTO>()
);

export const UpdateProduct = createAction(
  ProductsActionTypes.UpdateProduct,
  props<ProductDTO>()
);

export const DeleteProduct = createAction(
  ProductsActionTypes.DeleteProduct,
  props<DeleteProductDTO>()
);

export const SetProductsSuccess = createAction(
  ProductsActionTypes.SetProductsSuccess,
  props<{ products: ProductDTO[] }>()
);


export const SetProductsInitialState = createAction(
  ProductsActionTypes.SetProductsInitialState,
);
