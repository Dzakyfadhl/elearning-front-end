import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/profile-teacher/profile-teacher.component';

const routes: Routes = [
  {
    path: 'profile-teacher',
    component: ProfileTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileTeacherRoutingModule { }
