import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { DashboardTeacherComponent } from './layout/dashboard-teacher/dashboard-teacher.component';
import { Page404Component } from '@bootcamp-lawerning-page/page404/page404.component';

import { DashboardStudentComponent } from './layout/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
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
    path: 'teacher',
    component: DashboardTeacherComponent,
    loadChildren: () => import('./module/teacher/teacher.module').then(m=>m.TeacherModule)
  },
  {
    path: 'student',
    component: DashboardStudentComponent,
    loadChildren: () => import('./module/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'admin',
    component: DashboardAdminComponent,
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: Page404Component
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