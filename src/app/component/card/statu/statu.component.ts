import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Statut } from 'src/app/Model/statut';
import { StatutService } from 'src/app/service/statut.service';

@Component({
  selector: 'app-statu',
  templateUrl: './statu.component.html',
  styleUrls: ['./statu.component.css']
})
export class StatuComponent {
  stat:Statut=new Statut()

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
    this.statuService.newStatut(this.stat).subscribe(res=>{
      alert("succes")
    })
  }
}
