import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/update-profile-teacher/update-profile-teacher.component';

const routes: Routes = [
  {
    path: 'update/profile/teacher',
    component: UpdateProfileTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateProfileTeacherRoutingModule {}
