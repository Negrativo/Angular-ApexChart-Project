import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.scss']
})
export class GraficoPizzaComponent implements OnInit {
  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Marcos", "Camila", "Rafael", "Gustavo", "Felipe"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
   }

  ngOnInit(): void {
  }

}
