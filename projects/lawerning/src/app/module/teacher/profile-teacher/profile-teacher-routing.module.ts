import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/profile-teacher/profile-teacher.component';
import { UpdateProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/update-profile-teacher/update-profile-teacher.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileTeacherRoutingModule {}
