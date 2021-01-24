import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeacherComponent } from '@bootcamp-lawerning-page/admin/admin-teacher/admin-teacher.component';
import { ModifAdminTeacherComponent } from '@bootcamp-lawerning-page/admin/admin-teacher/modif-admin-teacher/modif-admin-teacher.component';

const routes: Routes = [
  {
    path: 'teachers',
    component: AdminTeacherComponent
  },
  {
    path: 'teachers/modif',
    component: ModifAdminTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTeacherRoutingModule { }
