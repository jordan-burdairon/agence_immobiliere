import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBien } from '../models/IBien';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BienService {
  
  //private _bienList : IBien[] = [];

  constructor(private _http : HttpClient, _router : Router) { }

  getAll() : Observable<IBien[]> {
    return this._http.get<IBien[]>(environment.api_url + "api/biens");
  }


  addBien(bien : IBien): Observable<IBien> {
    return this._http.post<IBien>(environment.api_url + "api/add" , bien);
  
  }

  getBienById(id : number): Observable<IBien> {
    return this._http.get<IBien>(environment.api_url + 'api/bien/' + id);
  }

  editBien(id : number, bien: IBien) : Observable<IBien> {
    return this._http.put<IBien>(environment.api_url + 'api/biens/' + id, bien);
  }

  
   
}
