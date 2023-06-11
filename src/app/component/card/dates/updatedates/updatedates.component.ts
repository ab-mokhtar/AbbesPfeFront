import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateType } from 'src/app/Model/date-type';
import { TypeDateService } from 'src/app/service/type-date.service';

@Component({
  selector: 'app-updatedates',
  templateUrl: './updatedates.component.html',
  styleUrls: ['./updatedates.component.css']
})
export class UpdatedatesComponent {
  type!:DateType

  constructor(
    private typeDateService:TypeDateService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      type: this.buildr.control(''),
      hint: this.buildr.control(''),
     
    });
  save(){
    this.type.type = this.myform.value.type ?? '';
    this.type.hint = this.myform.value.hint ?? '';
console.log(this.type)
    this.typeDateService.updateType(this.type.id,this.type).subscribe(res=>{
      alert("updated")
    })
  }
}


