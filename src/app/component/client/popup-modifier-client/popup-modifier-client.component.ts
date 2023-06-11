import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-popup-modifier-client',
  templateUrl: './popup-modifier-client.component.html',
  styleUrls: ['./popup-modifier-client.component.css']
})
export class PopupModifierClientComponent implements OnInit {

  validateForm!: FormGroup;
  clients!: Object;
  id: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)  public data:any,private ref: MatDialogRef<PopupModifierClientComponent>, 
  private fb: FormBuilder,
  private clientService: ClientService,
  ) {
    this.id=data.dataKey;
  }
  ngOnInit(): void {
 
    this.validateForm = this.fb.group({
      id: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      description: [null, [Validators.required]],
     
    })
    this.getClientById();
    console.log(this.id)
   
  }
 
  closepopup() {
    this.ref.close('Closed using function');
  }
  getClientById() {
    this.clientService.getClientById(this.id).subscribe((res) => {
      // console.log(res);
      this.validateForm.patchValue(res)
    })
  }

  updateClient() {
    // this.clientService.updateClient(this.id, this.validateForm.value).subscribe((res) => {
    //   // console.log(res);
    // })
    // alert('Modification effectué avec Succées');
  }


}
