import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'app', 
    component: LayoutComponent,
    children: [
      { path: 'operation-form', loadComponent: () => import('./operation-form/operation-form.component').then(m => m.OperationFormComponent) },
      { path: '', redirectTo: 'operation-form', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
