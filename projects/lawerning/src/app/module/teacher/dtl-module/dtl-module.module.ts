import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import { DtlModuleRoutingModule } from './dtl-module-routing.module';
import { DtlModuleComponent } from '@bootcamp-lawerning-page/teacher/dtl-module/dtl-module.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    DtlModuleComponent
  ],
  imports: [
    CommonModule,
    DtlModuleRoutingModule,
    TabViewModule,
    PanelModule,
    ButtonModule
  ]
})
export class DtlModuleModule { }
