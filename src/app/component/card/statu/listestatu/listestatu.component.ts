import { Component, OnInit } from '@angular/core';
import { Statut } from 'src/app/Model/statut';
import { UpdatestatuComponent } from '../updatestatu/updatestatu.component';
import { StatutService } from 'src/app/service/statut.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listestatu',
  templateUrl: './listestatu.component.html',
  styleUrls: ['./listestatu.component.css']
})
export class ListestatuComponent implements OnInit {
  openUpdateDialog(stat: Statut) {
    var _popup = this.dialog.open(UpdatestatuComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
     _popup.componentInstance.stat = stat;
  }
    statuts!:Statut[]
    constructor(private dialog: MatDialog,private statutService:StatutService){}
    ngOnInit(): void {
  this.statutService.getAllStatus().subscribe(res=>{
    this.statuts=res
  })  }
    
  deleteCharge(id:any){
    this.statutService.deleteStatut(id).subscribe(()=>{
      alert("deleted")
    })
  }
  
  }