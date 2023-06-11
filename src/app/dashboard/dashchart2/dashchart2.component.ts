import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashchart2',
  templateUrl: './dashchart2.component.html',
  styleUrls: ['./dashchart2.component.css']
})
export class Dashchart2Component implements OnInit {
  title = 'chartDemo';
  Abondonée= 2;
  alivrer= 15;
  cours=5;
  finis=21;
  livrée= 25;
  ngOnInit()
  {
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['Abondonée', 'A livrer', 'En cours', 'finis', 'Livrée'],
          datasets: [{
              label: 'Priorité',
              data: [this.Abondonée, this.alivrer, this.cours, this.finis, this.livrée],
              backgroundColor:"#FFD214",
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
