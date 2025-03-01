import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isSideFilterBarOpen = false;
  dashboardData = [
    { label: 'Users', value: 1200 },
    { label: 'Orders', value: 245 },
    { label: 'Revenue', value: '$12,000' },
  ];
  cards = [
    { id: 'chart1', title: 'Sales Growth' },
    { id: 'chart2', title: 'Revenue' },
    { id: 'chart3', title: 'Customer Visits' },
    { id: 'chart4', title: 'Orders Processed' },
    { id: 'chart5', title: 'Profit Trends' },
    { id: 'chart6', title: 'User Engagement' },
  ];
  filters = [
    { name: 'LSI', open: false },
    { name: 'Country', open: false },
    { name: 'LPO', open: false },
    { name: 'Date', open: false },
  ];
  toggleSideFilterbar() {
    this.isSideFilterBarOpen = !this.isSideFilterBarOpen;
  }
  toggleFilter(filter: any, event?: Event) {
    if (event) {
      event.stopPropagation(); // Prevents clicking the arrow from triggering other elements
    }
    filter.open = !filter.open;
  }
}
