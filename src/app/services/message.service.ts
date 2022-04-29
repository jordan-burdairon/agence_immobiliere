import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMessage } from '../models/IMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http : HttpClient) { }

  getAll(id: number): Observable<IMessage[]> {
    let params = new HttpParams();
    params = params.append('bien', id);
    return this._http.get<IMessage[]>(environment.api_url + "api/messages", {params})
  }

  addMessage(message : IMessage): Observable<IMessage> {
    return this._http.post<IMessage>(environment.api_url + "api/addmessage", message)
  }
}
