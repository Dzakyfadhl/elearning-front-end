import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleDetailComponent } from '@bootcamp-lawerning-page/student/module-detail/module-detail.component';

const routes: Routes = [
  {
    path: 'module/:id',
    component: ModuleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleDetailRoutingModule {}
