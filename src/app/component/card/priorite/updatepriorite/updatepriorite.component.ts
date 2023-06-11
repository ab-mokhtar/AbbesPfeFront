import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Priorite } from 'src/app/Model/priorite';
import { PrioriteService } from 'src/app/service/priorite.service';

@Component({
  selector: 'app-updatepriorite',
  templateUrl: './updatepriorite.component.html',
  styleUrls: ['./updatepriorite.component.css']
})
export class UpdateprioriteComponent {
  pri!:Priorite

  constructor(
    private prioriteService:PrioriteService,
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
    this.prioriteService.createPriority(this.pri).subscribe(res=>{
      alert("succes")
    })
  }
}
