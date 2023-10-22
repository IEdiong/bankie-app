import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  sidebarOpen!: boolean;
  notificationOpen!: boolean;
  dropdownOpen!: boolean;

  ngOnInit(): void {
    this.sidebarOpen = false;
    this.notificationOpen = false;
    this.dropdownOpen = false;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  openSidebar(): void {
    this.sidebarOpen = true;
  }

  toggleNotification(): void {
    this.notificationOpen = !this.notificationOpen;
  }

  closeNotification(): void {
    this.notificationOpen = false;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }
}
