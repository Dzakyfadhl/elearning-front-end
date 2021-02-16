import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from '@bootcamp-lawerning-page/teacher/change-password/change-password.component';
import { UpdateProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/update-profile-teacher/update-profile-teacher.component';

const routes: Routes = [
  {
    path: 'update/profile/teacher',
    component: UpdateProfileTeacherComponent,
  },
  {
    path: 'update/password/teacher',
    component: ChangePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfileTeacherRoutingModule {}
