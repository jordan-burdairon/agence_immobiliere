import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBien } from '../models/bien';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<IBien[]> {
    return this._http.get<IBien[]>(environment.api_url + "biens");
  }

  
}
