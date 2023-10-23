import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  get notificationOpen(): boolean {
    return this.layoutService.notificationOpen;
  }

  get dropdownOpen(): boolean {
    return this.layoutService.dropdownOpen;
  }

  ngOnInit(): void {}

  openSidebar(): void {
    this.layoutService.openSidebar();
  }

  toggleNotification(): void {
    this.layoutService.toggleNotification();
  }

  closeNotification(): void {
    this.layoutService.closeNotification();
  }

  toggleDropdown(): void {
    this.layoutService.toggleDropdown();
  }

  closeDropdown(): void {
    this.layoutService.closeDropdown();
  }
}
