import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordStudentComponent } from '@bootcamp-lawerning-page/student/change-password-student/change-password-student.component';
import { UpdateProfileStudentComponent } from '@bootcamp-lawerning-page/student/update-profile-student/update-profile-student.component';

const routes: Routes = [
  {
    path: 'student/update-profile',
    component: UpdateProfileStudentComponent,
  },
  {
    path: 'update/password/student',
    component: ChangePasswordStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfileRoutingModule {}
