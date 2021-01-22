import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTeacherComponent } from '@bootcamp-lawerning-page/teacher/course-teacher/course-teacher.component';

const routes: Routes = [
  {
    path: 'course-teacher',
    component: CourseTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseTeacherRoutingModule { }
