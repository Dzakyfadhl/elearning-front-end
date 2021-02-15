import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseComponent } from '@bootcamp-lawerning-page/admin/admin-course/admin-course.component';

const routes: Routes = [
  {
    path: 'course',
    component: AdminCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCourseRoutingModule {}
