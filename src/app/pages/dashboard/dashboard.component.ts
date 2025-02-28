import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isSideFilterBarOpen = false;
  toggleSideFilterbar() {
    this.isSideFilterBarOpen = !this.isSideFilterBarOpen;
  }
}
