import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseComponent } from '@bootcamp-lawerning-page/admin/admin-course/admin-course.component';

const routes: Routes = [
  {
    path: 'courses',
    component: AdminCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCourseRoutingModule {}
