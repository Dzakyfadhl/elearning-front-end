import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/home-teacher/home-teacher.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeTeacherComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
