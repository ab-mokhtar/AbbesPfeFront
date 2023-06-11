import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LivraisondetailsComponent } from './livraisondetails/livraisondetails.component';
import { LvdetailComponent } from './lvdetail/lvdetail.component';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {
  constructor(private dialog: MatDialog) {}
 
  livraisons: any[] = [
    // Exemple de données
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },
    { id: 1, trigramme: 'ABC', date: '2023-05-01', description:"Lorem Lorem Lorem1" },
    { id: 2, trigramme: 'DEF', date: '2023-05-02', description:"Lorem Lorem Lorem2" },
    { id: 3, trigramme: 'GHI', date: '2023-05-03', description:"Lorem Lorem Lorem3" },
    { id: 4, trigramme: 'JKL', date: '2023-05-01', description:"Lorem Lorem Lorem4" },
    { id: 5, trigramme: 'MNO', date: '2023-05-02', description:"Lorem Lorem Lorem5" },

  ];
  searchQuery: string = '';
  
  editLivraison(id: number) {
    // Logique de modification de la livraison avec l'ID donné
  }
  
  deleteLivraison(id: number) {
    // Logique de suppression de la livraison avec l'ID donné
  }


  display = false;
  onPress() {
    this.display = true;
    /*if you want the component to show and hide on click pressed, use 
    use this line*/
    this.display = !this.display;
  }

  ajouterLivraison(){
    var _popup = this.dialog.open(LivraisondetailsComponent, {
      width: '80%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }

  detailLiv(){
    var _popup = this.dialog.open(LvdetailComponent, {
      width: '45%',
      height: '45%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}


