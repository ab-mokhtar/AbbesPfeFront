import { Component,Input, OnInit  } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-popup-calendar',
  templateUrl: './popup-calendar.component.html',
  styleUrls: ['./popup-calendar.component.css']
})
export class PopupCalendarComponent implements OnInit {
  action!: any;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.object$.subscribe(object => {
      this.action = object;
    });
  }

  updateObject(value: any) {
    this.dataService.setObject(value);
  }
}
