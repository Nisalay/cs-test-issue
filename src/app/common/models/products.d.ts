declare interface ProductDTO {
  id: string;
  name: string;
  size: string;
  price: number;
}

declare interface EditTableDialogConfigDTO {
  event: 'add' | 'edit' | 'delete',
  data?: ProductDTO;
}
