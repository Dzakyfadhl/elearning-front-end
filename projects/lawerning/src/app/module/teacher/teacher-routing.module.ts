import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTeacherComponent } from '@bootcamp-lawerning-page/teacher/course-teacher/course-teacher.component';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/teacher/home-teacher/home-teacher.component';
import { ModuleTeacherComponent } from '@bootcamp-lawerning-page/teacher/module-teacher/module-teacher.component';

const routes: Routes = [
  {
    path: 'home-teacher',
    component: HomeTeacherComponent
  },
  {
    path: 'course-teacher',
    component: CourseTeacherComponent
  },
  {
    path: 'module-teacher',
    component: ModuleTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
