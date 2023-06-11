import { Injectable } from '@angular/core';
import {ActeurService}  from "../service/acteur.service"
const TOKEN = 'I_token';
const USER:string = 'I_user'
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor(acteurService:ActeurService) { }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static hasToken(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    return true;
  }

  static getToken(): any {
    
    return localStorage.getItem(USER);
  }

  public saveUser(user:any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getUser(): any {
    const decodedToken = jwt_decode(localStorage.getItem(USER));
 
    return decodedToken;
  }


  static getUserId(): string {
    const user = this.getUser();
    if (user == null) { return ''; }
    
    return user.userId;
  }

  static getUserRole(): string {
    const user = this.getUser().role;
    console.log("it return undefined sop let's debug it",this.getUser())
    if (user == null) { return ''; }
    //of course it return undefined cause the is no object to access to it named role 
    //he return a string jwt string to be specific
    return user;
  }

  static isUserLoggedIn(): boolean {
    console.log("  token is",this.getToken())
    if (this.getToken() === null) {
      return false;
    }
    console.log("maybe this function has an error",this.getUserRole())
    const role: string = this.getUserRole();

    
    // return role == 'ADMIN';
    return role == this.getUserRole();
  }

  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}
function jwt_decode(arg0: string | null) {
  throw new Error('Function not implemented.');
}

