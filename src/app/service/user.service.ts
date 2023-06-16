import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { UserAuthService } from './user-auth-service.service';

const API_URL = 'http://localhost:8088/api/v1/demo-controller';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  });
  constructor(private http: HttpClient,private userAuthService: UserAuthService
    ) {}
  USER_API_URL = "http://localhost:8088/api/user";

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
    return this.http.get<any>(this.USER_API_URL + "/getall");
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



  getnbAllUsers():Observable<any>{
    return this.http.get(this.USER_API_URL+"/nbrUsers")
  }
  getnbUsersByRole(role:any):Observable<any>{
    return this.http.get(this.USER_API_URL+"/nbrUsers/"+role)
  }
  public login(loginData: any) {
    return this.http.post( "http://localhost:8088/authenticate", loginData, { headers: this.requestHeader });
  }

  //@ts-ignore
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
      return isMatch;
    }
  }

}

