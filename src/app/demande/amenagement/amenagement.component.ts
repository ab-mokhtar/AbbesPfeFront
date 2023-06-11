import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AmengpopupComponent } from '../amengpopup/amengpopup.component';
@Component({
  selector: 'app-amenagement',
  templateUrl: './amenagement.component.html',
  styleUrls: ['./amenagement.component.css']
})
export class AmenagementComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    var _popup = this.dialog.open(AmengpopupComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });

  }
}
