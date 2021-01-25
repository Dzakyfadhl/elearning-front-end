import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTeacherRoutingModule } from './module-teacher-routing.module';
import { ModuleTeacherComponent } from '@bootcamp-lawerning-page/teacher/module/module-teacher/module-teacher.component';
import {TabViewModule} from 'primeng/tabview';
import {OrderListModule} from 'primeng/orderlist';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    ModuleTeacherComponent
  ],
  imports: [
    CommonModule,
    ModuleTeacherRoutingModule,
    TabViewModule,
    OrderListModule,
    PanelModule,
    ButtonModule
  ]
})
export class ModuleTeacherModule { }