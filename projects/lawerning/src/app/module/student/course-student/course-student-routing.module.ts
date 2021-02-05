import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesStudentComponent } from '@bootcamp-lawerning-page/student/courses-student/courses-student.component';

const routes: Routes = [
  {
    path: 'student/course',
    component: CoursesStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseStudentRoutingModule {}
