import { Component } from '@angular/core';
import { Planning } from 'src/app/Model/planning';

@Component({
  selector: 'app-detail-planning',
  templateUrl: './detail-planning.component.html',
  styleUrls: ['./detail-planning.component.css']
})
export class DetailPlanningComponent {
  planning!:Planning;

}
