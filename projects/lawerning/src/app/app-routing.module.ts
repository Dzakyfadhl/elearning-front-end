import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { DashboardStudentComponent } from './layout/dashboard-student/dashboard-student.component';
const routes : Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    component: DashboardStudentComponent,
    loadChildren: () => import('./module/student/course-available/course-available.module').then(m => m.CourseAvailableModule)
  },
  {
    path: '',
    component: DashboardStudentComponent,
    loadChildren: () => import('./module/student/course-student/course-student.module').then(m => m.CourseStudentModule)
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
