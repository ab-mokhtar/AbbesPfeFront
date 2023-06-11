import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';
const BASIC_URL = "/api/Livraison";
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient) { }

  createLivraison(Livraison: any) {
    return this.http.post(BASIC_URL + `/createLivraison/${UserStorageService.getUserId()}`, Livraison, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllLivraison(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllLivraison`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteLivraison(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteLivraison/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getLivraisonById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getLivraisonById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateLivraison(id: any, Livraison: any) {
    return this.http.put(BASIC_URL + `updateLivraison/${id}`, Livraison, {
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

}



