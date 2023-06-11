import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { Observable } from 'rxjs';
import { Acteur } from '../Model/Acteur';
import { User } from '../Model/user';

const BASIC_URL = "http://localhost:8088/Acteur/";
@Injectable({
  providedIn: 'root'
})
export class ActeurService {


  
  constructor(private http: HttpClient) { }


  createActeur(Acteur: any) {
    return this.http.post(BASIC_URL + `createActeur/${UserStorageService.getUserId()}`, Acteur, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllActeur():Observable<User[]>{
    return this.http.get<User[]>(BASIC_URL+'getAllActeur');
      }
   

  // getAllTeachers(): Observable<any> {
  //   return this.http.get(BASIC_URL + `api/teachers`, {
  //     headers: this.createdAuthorizationHeader(),
  //   });
  // }

  deleteActeur(acteurId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteActeur/${acteurId}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getActeurById(acteurId: any): Observable<any> {
    return this.http.get(BASIC_URL + `getActeurById/${acteurId}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateActeur(acteurId: any, Acteur: any) {
    return this.http.put(BASIC_URL + `updateActeur/${acteurId}`, Acteur, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  createdAuthorizationHeader(): HttpHeaders {
    let authHeader: HttpHeaders = new HttpHeaders();
    console.log( UserStorageService.getToken())
  
    return authHeader.set(
      "Authorization",
      "Bearer " + UserStorageService.getToken()
    )
  }


}
