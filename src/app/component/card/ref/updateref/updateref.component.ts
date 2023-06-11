import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reference } from 'src/app/Model/reference';
import { ReferenceService } from 'src/app/service/reference.service';

@Component({
  selector: 'app-updateref',
  templateUrl: './updateref.component.html',
  styleUrls: ['./updateref.component.css']
})
export class UpdaterefComponent implements OnInit {
  ref!: Reference 

  myform!: FormGroup;

  constructor(
    private refService: ReferenceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myform = this.formBuilder.group({
      typeReference: [this.ref.typeReference],
      valeurReference: [this.ref.valeurReference],
      lienReference: [this.ref.lienReference],
      noteReference: [this.ref.noteReference]
    });
  }

  save() {
    this.ref.typeReference = this.myform.value.typeReference || '';
    this.ref.valeurReference = this.myform.value.valeurReference || '';
    this.ref.lienReference = this.myform.value.lienReference || '';
    this.ref.noteReference = this.myform.value.noteReference || '';

    console.log(this.ref);
    this.refService.updateRefe(this.ref.id, this.ref).subscribe(res => {
      alert('success');
    });
  }
}
