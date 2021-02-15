import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSubjectComponent } from '@bootcamp-lawerning-page/admin/admin-subject/admin-subject.component';

const routes: Routes = [
  {
    path: 'subject-category',
    component: AdminSubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSubjectRoutingModule {}
