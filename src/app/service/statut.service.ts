import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { Observable } from 'rxjs';
import { Statut } from '../Model/statut';

const BASIC_URL = 'http://localhost:8088/api/v1/Statut/';

@Injectable({
  providedIn: 'root'
})
export class StatutService {

  constructor(private http: HttpClient) { }

  getAllStatus():Observable<Statut[]>{
    return this.http.get<Statut[]>(BASIC_URL+'getAllStatuts');
      }
  newStatut(Statut: any): Observable<any> {
  

    return this.http.post<[]>(BASIC_URL + `createStatut`, Statut);
  }


  deleteStatut(id:number):Observable<any>{
    return  this .http.delete<void>(BASIC_URL+"deleteStatut/"+id)
  }

  updateStatut(id:any, body:any):Observable<any>{
    return this.http.put(BASIC_URL+"updateStatut/"+id, body)
  }


}