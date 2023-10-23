import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  sidebarOpen!: boolean;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.sidebarOpen = this.layoutService.sidebarOpen;
  }

  closeSidebar(): void {
    this.layoutService.closeSidebar();
  }
}
