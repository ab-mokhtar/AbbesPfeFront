import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth-service.service';


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
  constructor(private userAuthService: UserAuthService, private router: Router) { }

  data = [
    {id:1, nom:"emna", Prenom:"ben...", Profil:"Developpeur", Email:"a@outlook.com", Motdepasse:"********", ImgProf:"../../../assets/Image/emp1.jpg"},
  ];
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/auth']);
  }
}
