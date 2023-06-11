import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { Priorite } from '../Model/priorite';

const url ="http://localhost:8088/api/v1/Priorite/"
@Injectable({
  providedIn: 'root'
})
export class PrioriteService {

  constructor(private http: HttpClient) { }
  getAllpriorites():Observable<Priorite[]>{
    return this.http.get<Priorite[]>(url+'getAllPriorites');
      }

      createPriority(body:any):Observable<any>{
        return this.http.post(url+ 'createPriorite', body)
      }
      deletePrio(id:number):Observable<any>{
        return  this .http.delete<void>(url+"delete"+id)
      }
    
      updatePrio(id:any, body:any):Observable<any>{
        return this.http.put(url+"editd/"+id, body)
      }

  /*newPriorite(Priorite: any): Observable<any> {
    console.log(Priorite);
    console.log(this.createdAuthorizationHeader());
    return this.http.post(url + `addPri/${UserStorageService.getUserId()}`, Priorite, {
      headers: this.createdAuthorizationHeader(),
    });
  }


  createPriority(body:any):Observable<any>{
    return this.http.post(url+ 'addPri', body)
  }


  createdAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      "Authorization",
      "Bearer " + UserStorageService.getToken()
    )
  }*/
}
