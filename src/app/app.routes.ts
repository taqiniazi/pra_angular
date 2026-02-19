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
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            m => m.DashboardComponent
          )
      },
      {
        path: 'operation-form',
        loadComponent: () =>
          import('./operation-form/operation-form.component').then(
            m => m.OperationFormComponent
          )
      },
       {
        path: 'performance-listing',
        loadComponent: () =>
          import('./performance-listing/performance-listing.component').then(
            m => m.PerformanceListingComponent
          )
      }
      ,
       {
        path: 'performance-form',
        loadComponent: () =>
          import('./performance-form/performance-form.component').then(
            m => m.PerformanceFormComponent
          )
      },
       {
        path: 'search-user',
        loadComponent: () =>
          import('./search-user/search-user.component').then(
            m => m.SearchUserComponent  
          )
      },
       {
        path: 'update-user',
        loadComponent: () =>
          import('./update-user/update-user.component').then(
            m => m.UpdateUserComponent  
          )
      },
      {
        path: 'user-guide',
        loadComponent: () =>
          import('./user-guide/user-guide.component').then(
            m => m.UserGuideComponent
          )
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
