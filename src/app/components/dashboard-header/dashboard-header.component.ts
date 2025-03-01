import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  standalone: false,
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css',
})
export class DashboardHeaderComponent {
  @Input() title: string = 'Main'; // Dashboard Title
  @Input() infoList: { label: string; value: any }[] = []; // Data to display
}
