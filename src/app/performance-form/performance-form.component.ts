import { Component } from '@angular/core';

@Component({
  selector: 'app-performance-form',
  standalone: true,
  imports: [],
  templateUrl: './performance-form.component.html',
  styleUrl: './performance-form.component.css'
})
export class PerformanceFormComponent {
 fileName: string = 'No file chosen';

  selectFile(): void {
    const fileInput = document.getElementById('file-picture') as HTMLInputElement;
    fileInput?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = 'No file chosen';
    }
  }

  onSubmit(): void {
    // Handle form submission
    console.log('Form submitted');
    alert('Form submitted successfully!');
  }
}
