import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

const API_URL = 'http://localhost:8088/api/v1/demo-controller';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  USER_API_URL = "http://localhost:8090/api/user";

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.USER_API_URL + "/addUser", user);
  }

  updateUser(user: User, email : string) {
    return this.http.patch<User>(this.USER_API_URL + "/update/"+email, user);
  }

  deleteUser(id: string) {
    return this.http.delete<User>(this.USER_API_URL + "/delete/" + id);
  }

  getUserByRole(role : string): Observable<User[]> {
    return this.http.get<any>(this.USER_API_URL + "/getByRole/"+role);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<any[]>(this.USER_API_URL + "/getall");
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.USER_API_URL + "/" + id);
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  motpasseoub(user: object): Observable<any> {
    return this.http.post<User>(this.USER_API_URL + "/mdpoub", user);
  }
}