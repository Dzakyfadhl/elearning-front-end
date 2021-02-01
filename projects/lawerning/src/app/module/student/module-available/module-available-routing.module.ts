import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAvailableComponent } from '@bootcamp-lawerning-page/student/module-available/module-available.component';

const routes: Routes = [
  {
    path: 'module-available/:courseId',
    component: ModuleAvailableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAvailableRoutingModule {}
