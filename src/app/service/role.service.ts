import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../Model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private ROLE_API_URL = 'http://localhost:8088/api/role';

  constructor(private httpClient : HttpClient) { }

  getAllRoles() : Observable<Role[]>{
    return this.httpClient.get<any>(this.ROLE_API_URL+"/getall");
  }
}

