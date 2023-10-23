import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  get sidebarOpen(): boolean {
    return this.layoutService.sidebarOpen;
  }
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {}

  closeSidebar(): void {
    this.layoutService.closeSidebar();
  }
}
