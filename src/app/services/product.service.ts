import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/products";//my api url for requests

  getProducts(categoryId): Observable<Product[]> {

    let pathWıthqueryString = this.path;
    if (categoryId) {
      pathWıthqueryString += "?categoryId=" + categoryId;
    }

    return this.http.get<Product[]>(pathWıthqueryString).pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.handleError));
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured:' + err.error.message
    } else {
      errorMessage = 'System has failed with an error'
    }
    return throwError(errorMessage);
  }


}
