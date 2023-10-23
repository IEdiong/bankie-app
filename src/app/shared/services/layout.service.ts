import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  sidebarOpen!: boolean;
  notificationOpen!: boolean;
  dropdownOpen!: boolean;

  constructor() {
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
