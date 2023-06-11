import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  constructor(private dialog: MatDialog) {}

  // openDialog() {

  //     const dialogConfig = new MatDialogConfig();

  //     dialogConfig.disableClose = true;
  //     dialogConfig.autoFocus = true;
  //     dialogConfig.data = {
  //       id: 1,
  //       title: 'Angular For Beginners'
  //   };
  //     this.dialog.open(DemandepopupComponent, dialogConfig);
  // }

}
