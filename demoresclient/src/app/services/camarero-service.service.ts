import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../model/camarero';

@Injectable()
export class CamareroServiceService {

    URL = 'https://pedi-gest.herokuapp.com/api/camareros';
    // used to inject dependencies
    constructor(private http:HttpClient) { }

    getAll():Observable<Camarero> {
        return this.http.get<Camarero>(this.URL);
    }
}
