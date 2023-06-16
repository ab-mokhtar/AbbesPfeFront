import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResetPasswordService } from 'src/app/service/reset-password.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.css']
})
export class RestaurationComponent {
  email: string = 'test'; // Declare the email property
  
  constructor(private resetService: ResetPasswordService,    private buildr: FormBuilder
    ) {}
    myform = this.buildr.group({
      email: ['', [Validators.required, Validators.email]]
    });
     sendMail() {
      console.log("wselet");
      
        const response =  this.resetService.motpasseoub(this.myform.value.email ?? '').subscribe(response=>{
        console.log('Response:', response);
        if (response instanceof HttpResponse && response.status === 200) {
          const responseBody = response.body;
           
            alert("Demande de récupération envoyée avec succès. Nous vous contacterons sur votre adresse e-mail.");
            this.myform.reset();
         
        } else  {
          alert("email invalid");
        }
     
    })}
    
    
    
    

}
