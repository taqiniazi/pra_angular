import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() open = false;
  @Output() closeSidebarEvent = new EventEmitter<void>();

  navItems= [
    { label: 'Dashboard', link: '/dashboard', exact: true },
    { label: 'Operation Form', link: '/operation-form', exact: true },
    { label: 'Performance Form', link: '/performance-form', exact: false },
    { label: 'Performance Listing', link: '/performance-listing', exact: false },
    { label: 'Search User', link: '/search-user', exact: false },
    { label: 'Update User', link: '/update-user', exact: false },
    { label: 'User Guide', link: '/user-guide', exact: false },
  ];

  closeSidebar(): void {
    this.closeSidebarEvent.emit();
  }
}
