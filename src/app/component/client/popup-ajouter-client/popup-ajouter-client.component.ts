import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-popup-ajouter-client',
  templateUrl: './popup-ajouter-client.component.html',
  styleUrls: ['./popup-ajouter-client.component.css']
})
export class PopupAjouterClientComponent implements OnInit{
  validateForm!: FormGroup;
  clients!: Object;

  constructor(
    @Inject(MAT_DIALOG_DATA)  private ref: MatDialogRef<PopupAjouterClientComponent>, 
  private fb: FormBuilder,
  private clientService: ClientService,
  ) {

  }
  ngOnInit(): void {
 
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      description: [null, [Validators.required]],
     
    })
   
  }
 
  closepopup() {
    this.ref.close('Closed using function');
  }

  createClient() {
  
    this.clientService.createClient(this.validateForm.value).subscribe((res) => {
    this.clients=res


    })

   alert('Ajout effectué avec Succées');

}





}
