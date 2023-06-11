import { Component, OnInit } from '@angular/core';
import { Charge } from 'src/app/Model/charge';
import { ChargeService } from 'src/app/service/charge.service';
import { UpdateChargeComponent } from '../update-charge/update-charge.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-liste-charge',
  templateUrl: './liste-charge.component.html',
  styleUrls: ['./liste-charge.component.css']
})
export class ListeChargeComponent implements OnInit {
openUpdateDialog(charge: Charge) {
  var _popup = this.dialog.open(UpdateChargeComponent, {
    width: '55%',
    height: '500px',
    enterAnimationDuration: '500ms',
    exitAnimationDuration: '500ms',
  });
   _popup.componentInstance.charge = charge;
}
  Charges!:Charge[]
  constructor(private dialog: MatDialog,private chareService:ChargeService){}
  ngOnInit(): void {
this.chareService.getAllCharges().subscribe(res=>{
  this.Charges=res
})  }
  
deleteCharge(id:any){
  this.chareService.deleteCharge(id).subscribe(()=>{
    alert("deleted")
  })
}

}
