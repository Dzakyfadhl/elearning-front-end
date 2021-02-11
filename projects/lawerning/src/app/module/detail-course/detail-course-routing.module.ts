import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCoursePageComponent } from '@bootcamp-lawerning-page/detail-course-page/detail-course-page.component';

const routes: Routes = [
  {
    path: 'course/module',
    component: DetailCoursePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCourseRoutingModule {}
