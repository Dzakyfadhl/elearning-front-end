import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseTypeComponent } from '@bootcamp-lawerning-page/admin/admin-course-type/admin-course-type.component';

const routes: Routes = [
  {
    path: 'course-type',
    component: AdminCourseTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCourseTypeRoutingModule {}
