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
    { label: 'Home', link: '/operation-form', exact: true },
    { label: 'User Guide', link: '/user-guide', exact: true },
    { label: 'Collection', link: '#', exact: false },
    { label: 'Downloads', link: '#', exact: false },
    { label: 'News', link: '#', exact: false },
    { label: 'Contact us', link: '#', exact: false },
    { label: 'Complaints/Facilitations', link: '#', exact: false },
    { label: 'Appeals', link: '#', exact: false }
  ];

  closeSidebar(): void {
    this.closeSidebarEvent.emit();
  }
}
