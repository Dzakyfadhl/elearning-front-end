import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseCategoryComponent } from '@bootcamp-lawerning-page/admin/course-category/course-category.component';

const routes: Routes = [
  {
    path: 'course-category',
    component: CourseCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCourseCategoryRoutingModule {}
