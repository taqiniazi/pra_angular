import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'operation-form',
        loadComponent: () =>
          import('./operation-form/operation-form.component').then(
            m => m.OperationFormComponent
          )
      },
      {
        path: 'user-guide',
        loadComponent: () =>
          import('./user-guide/user-guide.component').then(
            m => m.UserGuideComponent
          )
      },
      { path: '', redirectTo: 'operation-form', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
