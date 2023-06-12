import { Component,OnInit } from '@angular/core';
import { MaintpopupComponent } from '../maintpopup/maintpopup.component';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material/dialog';
import { DemandeService } from 'src/app/service/demande.service';
import { Demande } from 'src/app/Model/demande';
import { DemandeinfoComponent } from '../demandeinfo/demandeinfo.component';
import { DetailDemandeComponent } from '../detail-demande/detail-demande.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  demandes:Demande[]=[]
  constructor(private dialog: MatDialog,private demandeService:DemandeService) {}
  ngOnInit(): void {
   this.demandeService.getAllDemandes().subscribe(data=>{
    this.demandes=data;
   })
  }

  // openDialog() {

  //     this.dialog.open(MaintpopupComponent);
  // }
 
  openDialog() {
    var _popup = this.dialog.open(MaintpopupComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });

  }
  deleteDemande(id:any){
    this.demandeService.deleteDemande(id).subscribe(()=>
    alert("demande deleted"))
  }
  openUpdateDialog(demande:Demande) {
    var _popup = this.dialog.open(DemandeinfoComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
     _popup.componentInstance.demande = demande;

}
openDetailDialog(demande:Demande) {
  var _popup = this.dialog.open(DetailDemandeComponent, {
    width: '55%',
    height: '500px',
    enterAnimationDuration: '500ms',
    exitAnimationDuration: '500ms',
  });
   _popup.componentInstance.demande = demande;

}
}
