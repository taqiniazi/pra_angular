import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  isDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Closes the dropdown menu.
   */
/*******  8eccd0af-3546-4596-ad60-1df188412963  *******/  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeDropdown();
    }
  }

  onLogout(event: Event): void {
    event.preventDefault();
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
}
