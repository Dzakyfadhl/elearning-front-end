import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseComponent } from '@bootcamp-lawerning-page/admin/admin-course/admin-course.component';
import { ModifAdminCourseComponent } from '@bootcamp-lawerning-page/admin/admin-course/modif-admin-course/modif-admin-course.component';

const routes: Routes = [
  {
    path: 'courses',
    component: AdminCourseComponent
  },
  {
    path: 'courses/modif',
    component: ModifAdminCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCourseRoutingModule { }
