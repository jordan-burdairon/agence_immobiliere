import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Auth } from '../models/auth.models';
import { IUser } from '../models/IUser';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  public login(form: Login): Observable<Auth> {
    return this._http.post<Auth>('http://localhost:8000/api/login_check', form)
  }
}
