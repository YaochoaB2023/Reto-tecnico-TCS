import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  calcularSumaTotal(productos: any[]): number {
    return productos.reduce((total, producto) => total + producto.price, 0);
  }
}
