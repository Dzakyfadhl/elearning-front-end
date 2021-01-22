import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/teacher/home-teacher/home-teacher.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
