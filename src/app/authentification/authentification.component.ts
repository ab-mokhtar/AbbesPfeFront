import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth-service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  
  isLoading: boolean = false;

  constructor(
    private userService : UserService,
    private userAuthService : UserAuthService,
    private router : Router
  ) {}


  ngOnInit(): void {
  }

  login(loginForm : NgForm){
    this.isLoading = true;

    this.userService.login(loginForm.value).subscribe(
      (response : any) => {
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setRoles(response.user.roles);
        console.log("user logged in");
         const role = response.user.roles[0].roleName;
          this.isLoading = false;
         if(role === 'Admin'){
           this.router.navigate(['/menubar']);
         }
        
         else {
           // TODO : arja3 thabet mba3ed 7asseb role win bech t'hezou
           this.router.navigate(['/home'])
         }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
