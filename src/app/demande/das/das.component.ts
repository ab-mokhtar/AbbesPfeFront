import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DaspopupComponent } from '../daspopup/daspopup.component';
@Component({
  selector: 'app-das',
  templateUrl: './das.component.html',
  styleUrls: ['./das.component.css']
})
export class DASComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    var _popup = this.dialog.open(DaspopupComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });

  }
}
