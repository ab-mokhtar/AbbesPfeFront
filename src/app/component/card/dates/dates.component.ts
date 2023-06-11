import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateType } from 'src/app/Model/date-type';
import { TypeDateService } from 'src/app/service/type-date.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent  {
  typeDate:DateType=new DateType()

  constructor(
    private typeDateService:TypeDateService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      type: this.buildr.control(''),
      hint: this.buildr.control(''),
     
    });
  save(){
    this.typeDate.type = this.myform.value.type ?? '';
    this.typeDate.hint = this.myform.value.hint ?? '';
console.log(this.typeDate)
    this.typeDateService.AddType(this.typeDate).subscribe(res=>{
      alert("succes")
    })
  }
}
