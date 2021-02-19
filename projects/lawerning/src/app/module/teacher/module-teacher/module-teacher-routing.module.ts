import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleTeacherComponent } from '@bootcamp-lawerning-page/teacher/module/module-teacher/module-teacher.component';

const routes: Routes = [
  {
    path: 'module/:courseId',
    component: ModuleTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTeacherRoutingModule {}
