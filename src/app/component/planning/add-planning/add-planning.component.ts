import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@fullcalendar/core/internal';
import { Planning } from 'src/app/Model/planning';
import { User } from 'src/app/Model/user';
import { ActeurService } from 'src/app/service/acteur.service';
import { PlanningService } from 'src/app/service/planning.service';
import { PlanningComponent } from '../planning.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {
  
  planning: Planning=new Planning() ;
  
  acteurs!: User[];
  usersSelected:string[]=[]
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<PopupComponent>,private planningService: PlanningService,private acteurservice:ActeurService,
    private router:Router) { }

  ngOnInit() {
    this.planning.users=[]
    this.loadActeurs();
  }
  closepopup() {
    this.ref.close('Closed using function');
  }
  loadActeurs() {
    // Faites appel à un service pour charger la liste des acteurs depuis l'API
    this.acteurservice.getAllActeur().subscribe(acteurs => {
      this.acteurs = acteurs;
    });
  }

  

  submitForm() {
    console.log(this.planning)
    this.usersSelected.forEach(element => {
      let u=new User()
      u.userEmail=element
      this.planning.users.push(u)
    });
    // Faites appel à un service pour envoyer les données du formulaire à l'API
    this.planningService.createPlanning(this.planning).subscribe(res => {
      console.log(res)
      // Réinitialisez le formulaire après avoir ajouté l'action avec succès
      this.planning = new Planning();
      this.router.navigate(['planning'])   });
      this.closepopup()
  }
}








