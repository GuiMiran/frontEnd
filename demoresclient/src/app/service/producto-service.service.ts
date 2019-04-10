import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable()
export class ProductoServiceService {

    URL = 'https://pedi-gest.herokuapp.com/api/productos';
    // used to inject dependencies
    constructor(private http:HttpClient) { }

    getAll():Observable<Producto> {
        return this.http.get<Producto>(this.URL);
    }
}
