import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Acteur } from 'src/app/Model/Acteur';
import { Action } from 'src/app/Model/Action';
import { Demande } from 'src/app/Model/demande';
import { User } from 'src/app/Model/user';
import { ActeurService } from 'src/app/service/acteur.service';
import { ActionService } from 'src/app/service/action.service';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  action: Action=new Action() ;
  acteurs!: User[];
  demandes!: Demande[];
  engagements:string[]=['Null','Confirmé','Prêt','Anticipé']
  prioriteFilieres:string[]=['p0','p1','p2','p3','p4']
  constructor(private actionService: ActionService,private acteurservice:ActeurService,private demandeservice:DemandeService,
    private router:Router) { }

  ngOnInit() {
    this.action.user=new User()
    this.action.demande=new Demande()
    this.loadActeurs();
    this.loadDemandes();
  }

  loadActeurs() {
    // Faites appel à un service pour charger la liste des acteurs depuis l'API
    this.acteurservice.getAllActeur().subscribe(acteurs => {
      this.acteurs = acteurs;
    });
  }

  loadDemandes() {
    // Faites appel à un service pour charger la liste des demandes depuis l'API
    this.demandeservice.getAllDemandes().subscribe(demandes => {
      this.demandes = demandes;
      console.log(this.demandes.length)
    });
  }

  submitForm() {
    console.log(this.action)
    // Faites appel à un service pour envoyer les données du formulaire à l'API
    this.actionService.createAction(this.action).subscribe(res => {
      console.log(res)
      // Réinitialisez le formulaire après avoir ajouté l'action avec succès
      this.action = new Action();
      this.router.navigate(['calendar'])   });
  }
}








