import { AfterViewInit, Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-dashboard-card',
  standalone: false,
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css',
})
export class DashboardCardComponent {
  @Input() title: string = '';
  @Input() chartId: string = '';
  // ngAfterViewInit() {
  //   this.loadChart();
  // }
  // loadChart() {
  //   new Chart(this.chartId as any, {
  //     type: 'line', // Change this to 'bar', 'pie', etc., as needed
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //       datasets: [
  //         {
  //           label: this.title,
  //           data: [10, 20, 15, 25, 30, 45],
  //           backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //           borderColor: 'rgba(54, 162, 235, 1)',
  //           borderWidth: 2,
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //     },
  //   });
  // }
}
