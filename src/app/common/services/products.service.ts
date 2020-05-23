import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { productsMock } from '../mocks/products';
import { delay, map } from 'rxjs/operators';
import * as uuid from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = productsMock;
  constructor() {
  }

  /**
   * Получение списка продуктов
   * @param categoryName - Код категории продукта
   * @return - список продуктов
   */
  public getProducts(categoryName: string): Observable<ProductDTO[]> {
    return of([...this.products[categoryName]]);
  }

  /**
   * Добавление продукта
   * Припысывает id продукту и добавляет его в нужную категорию
   * @param product - данные продукта
   * @param categoryName - Код категории
   * @return - измененный список продуктов (c добавленным значением)
   */
  public addProduct({ product, categoryName }: { product: ProductDTO, categoryName: string }): Observable<ProductDTO[]> {
    product.id = uuid.v4();
    this.products[categoryName].push(product);
    return of([...this.products[categoryName]]).pipe(delay(1000));
  }

  /**
   * Изменение продукта
   * Заменяет соответствующий продукт на новый, введенный пользователем
   * @param product - данные продукта
   * @param categoryName - Код категории
   * @return - измененный список продуктов (c измененным значением)
   */
  public updateProduct({ product, categoryName }: { product: ProductDTO, categoryName: string }): Observable<ProductDTO[]> {
    const i = this.products[categoryName].findIndex(p => p.id === product.id);
    this.products[categoryName][i] = product;
    return of([...this.products[categoryName]]).pipe(delay(1000));
  }

  /**
   * Удаление продукта
   * Удаляет продукт из соответствующей категории по id
   * @param id - id продукта
   * @param categoryName - Код категории
   * @return - измененный список продуктов (c удаленным значением)
   */
  public deleteProduct({ id, categoryName }: { id: string; categoryName: string }): Observable<ProductDTO[]> {
    const i = this.products[categoryName].findIndex(p => p.id === id);
    this.products[categoryName].splice(i, 1);
    return of([...this.products[categoryName]]);
  }
}
