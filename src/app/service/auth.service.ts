import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8088/api/auth/";
const AUTH_HEADER = "authorization"


//taw badili hakom
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  login(username: string, password: string): any {
    console.log(username,password)
  
    return this.http.post<[]>(BASIC_URL + 'authenticate', {
      mail: username,
      motdePasse:password
    }, { observe: 'response' })
      .pipe(
        tap(_ => this.log('User Authentication')),
        map((res: HttpResponse<any>) => {
          console.log("res is service", res.body.token);
          this.userStorageService.saveUser(res.body.token);
          console.log(res);
          const tokenLength = res.body.token.length;
          const bearerToken =  res.body.token.substring(7, tokenLength);
          this.userStorageService.saveToken(bearerToken);
          return res.body.token;
        }));
  }


  register(data): Observable<any> {
    console.log(data);
    return this.http.post(BASIC_URL + "sign-up", data);
  }

  checkEmail(mail):Observable<any>{
    return this.http.post<any>(BASIC_URL+"checkEmail",{mail}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  resetPassword(mail,code,password):Observable<any>{
    return this.http.post<any>(BASIC_URL+"resetPassword",{mail,code,password}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }


  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}