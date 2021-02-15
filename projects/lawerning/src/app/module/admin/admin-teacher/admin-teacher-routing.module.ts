import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeacherComponent } from '@bootcamp-lawerning-page/admin/admin-teacher/admin-teacher.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: AdminTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTeacherRoutingModule {}
