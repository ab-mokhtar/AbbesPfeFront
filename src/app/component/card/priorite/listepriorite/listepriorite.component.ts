import { Component, OnInit } from '@angular/core';
import { UpdateprioriteComponent } from '../updatepriorite/updatepriorite.component';
import { Priorite } from 'src/app/Model/priorite';
import { PrioriteService } from 'src/app/service/priorite.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listepriorite',
  templateUrl: './listepriorite.component.html',
  styleUrls: ['./listepriorite.component.css']
})
export class ListeprioriteComponent implements OnInit {
  openUpdateDialog(priorite: Priorite) {
    var _popup = this.dialog.open(UpdateprioriteComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
     _popup.componentInstance.pri = priorite;
  }
    priorites!:Priorite[]
    constructor(private dialog: MatDialog,private prioriteService:PrioriteService){}
    ngOnInit(): void {
  this.prioriteService.getAllpriorites().subscribe(res=>{
    this.priorites=res
  })  }
    
  deleteCharge(id:any){
    this.prioriteService.deletePrio(id).subscribe(()=>{
      alert("deleted")
    })
  }
  
  }