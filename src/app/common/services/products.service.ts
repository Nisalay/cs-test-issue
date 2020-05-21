import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { productsMock } from '../mocks/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(categoryName: string): Observable<ProductDTO[]> {
    return of(productsMock).pipe(
      map((products: { [key: string]: ProductDTO[] }) => products[categoryName])
    );
  }
}
