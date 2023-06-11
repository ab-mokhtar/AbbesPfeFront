import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { Action } from '../Model/Action';

const BASIC_URL = "http://localhost:8088/api/v1/Action/";
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  createAction(Action: any):Observable<any> {
    return this.http.post(BASIC_URL + `createAction`, Action);
  }

  getAllAction(): Observable<Action[]> {
    return this.http.get<Action[]>(BASIC_URL + `getAllAction`);
  }

  deleteAction(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteAction/${id}`);
  }

  getActionById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getActionById/${id}`);
  }

  updateAction(id: any, Action: any) {
    return this.http.put(BASIC_URL + `updateAction/${id}`, Action);
  }

  getnbAllActions():Observable<any>{
    return this.http.get(BASIC_URL+"nbrActions")
  }

}

