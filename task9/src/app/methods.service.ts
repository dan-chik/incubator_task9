import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./products";

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  products: Product[] = [];
  private baseUrl = '/products.json';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product> {
    return this.http.get<Product>(this.baseUrl);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }

  getProductDetails(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${productId}/details`);
  }
}
