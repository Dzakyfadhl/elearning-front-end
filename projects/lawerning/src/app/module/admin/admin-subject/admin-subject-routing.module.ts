import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSubjectComponent } from '@bootcamp-lawerning-page/admin/admin-subject/admin-subject.component';
import { ModifAdminSubjectComponent } from '@bootcamp-lawerning-page/admin/admin-subject/modif-admin-subject/modif-admin-subject.component';

const routes: Routes = [
  {
    path: 'subjects',
    component: AdminSubjectComponent
  },
  {
    path: 'subjects/modif',
    component: ModifAdminSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSubjectRoutingModule { }
