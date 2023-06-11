import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Reference } from 'src/app/Model/reference';
import { ReferenceService } from 'src/app/service/reference.service';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent {
  ref:Reference=new Reference()

  constructor(
    private refService:ReferenceService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      typeReference: this.buildr.control(''),
      valeurReference: this.buildr.control(''),
      lienReference: this.buildr.control(''),
      noteReference: this.buildr.control(''),

    });
  save(){
    this.ref.typeReference = this.myform.value.typeReference ?? '';
    this.ref.valeurReference = this.myform.value.valeurReference ?? '';
    this.ref.lienReference = this.myform.value.lienReference ?? '';
    this.ref.noteReference = this.myform.value.noteReference ?? '';

    console.log(this.ref)
    this.refService.AddRef(this.ref).subscribe(res=>{
      alert("succes")
    })
  }
}
