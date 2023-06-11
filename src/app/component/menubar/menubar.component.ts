import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  data = [
    {id:1, nom:"emna", Prenom:"ben...", Profil:"Developpeur", Email:"a@outlook.com", Motdepasse:"********", ImgProf:"../../../assets/Image/emp1.jpg"},
  ];

}
