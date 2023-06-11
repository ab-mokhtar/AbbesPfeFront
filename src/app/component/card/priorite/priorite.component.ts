import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Priorite } from 'src/app/Model/priorite';
import { PrioriteService } from 'src/app/service/priorite.service';

@Component({
  selector: 'app-priorite',
  templateUrl: './priorite.component.html',
  styleUrls: ['./priorite.component.css']
})
export class PrioriteComponent {
  pri:Priorite=new Priorite()

  constructor(
    private PrioriteService:PrioriteService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      typePriorite: this.buildr.control(''),
      valeurPriorite: this.buildr.control(''),
     

    });
  save(){
    this.pri.typePriorite = this.myform.value.typePriorite ?? '';
    this.pri.valeurPriorite = this.myform.value.valeurPriorite ?? '';
  

    console.log(this.pri)
    this.PrioriteService.createPriority(this.pri).subscribe(res=>{
      alert("succes")
    })
  }
}
