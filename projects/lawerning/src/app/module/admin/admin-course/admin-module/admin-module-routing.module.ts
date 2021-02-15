import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModuleComponent } from '@bootcamp-lawerning-page/admin/admin-course/admin-module/admin-module.component';

const routes: Routes = [
  {
    path: 'course/:courseId',
    component: AdminModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
