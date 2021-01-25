import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeStudentComponent } from '@bootcamp-lawerning-page/student/home-student/home-student.component';

const routes: Routes = [
  {
    path: 'home-student',
    component: HomeStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAvailableRoutingModule { }
