import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileStudentComponent } from '@bootcamp-lawerning-page/student/profile-student/profile-student.component';

const routes: Routes = [
  {
    path: 'profile-student',
    component: ProfileStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileStudentRoutingModule { }
