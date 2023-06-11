import { Component, OnInit } from '@angular/core';
import { Reference } from 'src/app/Model/reference';
import { ReferenceService } from 'src/app/service/reference.service';
import { UpdaterefComponent } from '../updateref/updateref.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listeref',
  templateUrl: './listeref.component.html',
  styleUrls: ['./listeref.component.css']
})
export class ListerefComponent implements OnInit {
  openUpdateDialog(ref: Reference) {
    var _popup = this.dialog.open(UpdaterefComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
     _popup.componentInstance.ref = ref;
  }
    refernces!:Reference[]
    constructor(private dialog: MatDialog,private refernceService:ReferenceService
      ){}
    ngOnInit(): void {
  this.refernceService.getAllReferences().subscribe(res=>{
    this.refernces=res
  })  }
    
  deleteCharge(id:any){
    this.refernceService.deleteRef(id).subscribe(()=>{
      alert("deleted")
    })
  }
  
  }