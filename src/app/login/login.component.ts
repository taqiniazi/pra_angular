import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  captcha: string = '';
  captchaCode: string = 'Y729NI';

  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/operation-form']);
  }

  refreshCaptcha(): void {
    // Generate random captcha
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length)) + ' ';
    }
    this.captchaCode = result.trim();
  }
}
