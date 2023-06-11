import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AutreactpopupComponent } from '../autreactpopup/autreactpopup.component';
@Component({
  selector: 'app-autre-d',
  templateUrl: './autre-d.component.html',
  styleUrls: ['./autre-d.component.css']
})
export class AutreDComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    var _popup = this.dialog.open(AutreactpopupComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });

  }
}
