import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Charge } from 'src/app/Model/charge';
import { ChargeService } from 'src/app/service/charge.service';

@Component({
  selector: 'app-update-charge',
  templateUrl: './update-charge.component.html',
  styleUrls: ['./update-charge.component.css']
})
export class UpdateChargeComponent {
  charge!:Charge

  constructor(
    private chargeService:ChargeService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      typeCharge: this.buildr.control(''),
      valeurCharge: this.buildr.control(0),

    });
  save(){
    this.charge.typeCharge = this.myform.value.typeCharge ?? '';
    this.charge.valeurCharge = this.myform.value.valeurCharge ??0 ;

    console.log(this.charge)
    this.chargeService.updateCharge(this.charge.id,this.charge).subscribe(res=>{
      alert("succes")
    })
  }
}
