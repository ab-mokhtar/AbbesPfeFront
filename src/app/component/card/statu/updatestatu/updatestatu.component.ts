import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Statut } from 'src/app/Model/statut';
import { StatutService } from 'src/app/service/statut.service';

@Component({
  selector: 'app-updatestatu',
  templateUrl: './updatestatu.component.html',
  styleUrls: ['./updatestatu.component.css']
})
export class UpdatestatuComponent {
  stat!:Statut

  constructor(
    private statuService:StatutService,
    private buildr: FormBuilder
    ){}
    myform = this.buildr.group({
      typeStatut: this.buildr.control(''),
      valeurStatut: this.buildr.control(''),
      noteStatut: this.buildr.control(''),

    });
  save(){
    this.stat.typeStatut = this.myform.value.typeStatut ?? '';
    this.stat.valeurStatut = this.myform.value.valeurStatut ?? '';
    this.stat.noteStatut = this.myform.value.noteStatut ?? '';

    console.log(this.stat)
    this.statuService.updateStatut(this.stat.id,this.stat).subscribe(res=>{
      alert("succes")
    })
  }
}
