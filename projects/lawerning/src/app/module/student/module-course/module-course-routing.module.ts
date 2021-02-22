import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleCourseComponent } from '@bootcamp-lawerning-page/student/module-course/module-course.component';

const routes: Routes = [
  {
    path: 'courses/:courseId',
    component: ModuleCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCourseRoutingModule {}
