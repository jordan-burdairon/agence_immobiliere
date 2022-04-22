import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user : IUser[] = [{login : "admin", password: "admin"}];

  constructor() { }

  connectUser(login : string) {
    return this._user.find(user => user.login == login)
  }

  disconnectUser() : undefined {
    return undefined;
  }
}
