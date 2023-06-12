import { Component } from '@angular/core';
import { Demande } from 'src/app/Model/demande';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent {
  demande!:Demande

}
