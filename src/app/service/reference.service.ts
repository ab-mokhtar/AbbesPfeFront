import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reference } from '../Model/reference';

const BASIC_URL = 'http://localhost:8088/api/v1/Reference/';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }

  newReference(Reference: any): Observable<any> {
    console.log(Reference);
    console.log(this.createdAuthorizationHeader());
    return this.http.post(BASIC_URL + `newReference/${UserStorageService.getUserId()}`, Reference, {
      headers: this.createdAuthorizationHeader(),
    });
  }

 
  createdAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    return authHeader.set(
      "Authorization",
      "Bearer " + UserStorageService.getToken()
    )
  }
  getAllReferences():Observable<Reference[]>{
    return this.http.get<Reference[]>(BASIC_URL+'getAllReference');
      }
      AddRef(body:any):Observable<any> {
        return this.http.post(BASIC_URL+"createReference", body)
          }
   getRefById(id:any):Observable<any>{
    return this.http.get<any>(BASIC_URL+"getbyid/"+id)
  }
  deleteRef(id:number):Observable<any>{
    return  this .http.delete<void>(BASIC_URL+"deleteReference/"+id)
  }

  updateRefe(id:any, body:any):Observable<any>{
    return this.http.put(BASIC_URL+"updateReference/"+id, body)
  }
}
