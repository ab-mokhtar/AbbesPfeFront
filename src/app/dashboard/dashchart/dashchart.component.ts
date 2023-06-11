import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashchart',
  templateUrl: './dashchart.component.html',
  styleUrls: ['./dashchart.component.css']
})
export class DashchartComponent implements OnInit {
  title = 'chartDemo';
  statusenattente= 12;
  statusencours= 5;
  statusTerminé=45
  ngOnInit()
  {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['En attente', 'En cours', 'Terminé'],
          datasets: [{
              label: 'Actions',
              data: [this.statusenattente, this.statusencours, this.statusTerminé],
              backgroundColor:"lightblue",
              borderColor: "white",
              borderWidth: 2
          }]
      },
      options: {
          indexAxis: 'y',
      }
  });
  }
}
