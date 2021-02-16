import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { DashboardTeacherComponent } from './layout/dashboard-teacher/dashboard-teacher.component';
import { Page404Component } from '@bootcamp-lawerning-page/page404/page404.component';
import { DashboardStudentComponent } from './layout/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
import { HomePageComponent } from '@bootcamp-lawerning-page/home-page/home-page.component';
import { RegisterPageComponent } from '@bootcamp-lawerning-page/register-page/register-page.component';

import { ResetPasswordComponent } from '@bootcamp-lawerning-page/reset-password/reset-password.component';
import { CheckLoginGuard } from './shared/check-login.guard';
const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'password/reset',
    component: ResetPasswordComponent,
  },
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [CheckLoginGuard],
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    component: RegisterPageComponent,
    canActivate: [CheckLoginGuard],
    loadChildren: () =>
      import('./module/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '',
    component: DashboardTeacherComponent,

    canActivate: [CheckLoginGuard],
    loadChildren: () =>
      import('./module/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: '',
    component: DashboardStudentComponent,

    canActivate: [CheckLoginGuard],
    loadChildren: () =>
      import('./module/student/course-available/course-available.module').then(
        (m) => m.CourseAvailableModule
      ),
  },
  {
    path: '',
    component: DashboardStudentComponent,
    loadChildren: () =>
      import('./module/student/course-student/course-student.module').then(
        (m) => m.CourseStudentModule
      ),
  },
  {
    path: 'admin',
    component: DashboardAdminComponent,
    loadChildren: () =>
      import('./module/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
