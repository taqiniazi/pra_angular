import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  link: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() closeSidebarEvent = new EventEmitter<void>();

  navItems: NavItem[] = [
    { label: 'Home', link: '#', active: true },
    { label: 'User Guide', link: '#' },
    { label: 'Collection', link: '#' },
    { label: 'Downloads', link: '#' },
    { label: 'News', link: '#' },
    { label: 'Contact us', link: '#' },
    { label: 'Complaints/Facilitations', link: '#' },
    { label: 'Appeals', link: '#' }
  ];

  closeSidebar(): void {
    this.closeSidebarEvent.emit();
  }
}
