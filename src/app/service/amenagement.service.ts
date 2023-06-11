import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "api/Amenagement/";

@Injectable({
  providedIn: 'root'
})
export class AmenagementService {


  constructor(private http: HttpClient) { }

  createAmenagement(Amenagement: any) {
    return this.http.post(BASIC_URL + `/createAmenagement/${UserStorageService.getUserId()}`, Amenagement, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllAmenagements(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllAmenagements`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteAmenagement(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteAmenagement/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAmenagementById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getAmenagementById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateAmenagement(id: any, Amenagement: any) {
    return this.http.put(BASIC_URL + `updateAmenagement/${id}`, Amenagement, {
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
