import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtlModuleComponent } from '@bootcamp-lawerning-page/teacher/dtl-module/dtl-module.component';

const routes: Routes = [
  {
    path: 'dtl-module/:moduleName',
    component: DtlModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DtlModuleRoutingModule { }
