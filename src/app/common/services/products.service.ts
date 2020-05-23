import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { productsMock } from '../mocks/products';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = productsMock;
  constructor() {
  }

  public getProducts(categoryName: string): Observable<ProductDTO[]> {
    return of([...this.products[categoryName]]);
  }

  public addProduct({ product, categoryName }: { product: ProductDTO, categoryName: string }): Observable<ProductDTO[]> {
    product.id = uuid.v4();
    this.products[categoryName].push(product);
    return of([...this.products[categoryName]]);
  }

  public updateProduct({ product, categoryName }: { product: ProductDTO, categoryName: string }): Observable<ProductDTO[]> {
    const i = this.products[categoryName].findIndex(p => p.id === product.id);
    this.products[categoryName][i] = product;
    return of([...this.products[categoryName]]);
  }

  public deleteProduct({ id, categoryName }: { id: string; categoryName: string }) {
    const i = this.products[categoryName].findIndex(p => p.id === id);
    this.products[categoryName].splice(i, 1);
    return of([...this.products[categoryName]]);
  }
}
