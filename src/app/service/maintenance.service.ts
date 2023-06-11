import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8088/api/Maintenance";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(private http: HttpClient) { }

  createMaintenance(Maintenance: any) {
    return this.http.post(BASIC_URL + `/createMaintenance`, Maintenance, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getAllMaintenance(): Observable<any> {
    return this.http.get(BASIC_URL + `/getAllMaintenance`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  deleteMaintenance(id: any): Observable<any> {
    return this.http.delete(BASIC_URL + `deleteMaintenance/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  getMaintenanceById(id: any): Observable<any> {
    return this.http.get(BASIC_URL + `getMaintenanceById/${id}`, {
      headers: this.createdAuthorizationHeader(),
    });
  }

  updateMaintenance(id: any, Maintenance: any) {
    return this.http.put(BASIC_URL + `updateMaintenance/${id}`, Maintenance, {
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
