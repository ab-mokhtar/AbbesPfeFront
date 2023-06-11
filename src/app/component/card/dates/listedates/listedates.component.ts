import { Component, OnInit } from '@angular/core';
import { UpdatedatesComponent } from '../updatedates/updatedates.component';
import { DateType } from 'src/app/Model/date-type';
import { TypeDateService } from 'src/app/service/type-date.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listedates',
  templateUrl: './listedates.component.html',
  styleUrls: ['./listedates.component.css']
})
export class ListedatesComponent implements OnInit {
  openUpdateDialog(type: DateType) {
    var _popup = this.dialog.open(UpdatedatesComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
     _popup.componentInstance.type = type;
  }
    types!:DateType[]
    constructor(private dialog: MatDialog,private typedateService:TypeDateService){}
    ngOnInit(): void {
  this.typedateService.getTypeDate().subscribe(res=>{
    this.types=res
  })  }
    
  deleteCharge(id:any){
    this.typedateService.deleteDType(id).subscribe(()=>{
      alert("deleted")
    })
  }
  
  }