import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTeacherRoutingModule } from './module-teacher-routing.module';
import { ModuleTeacherComponent } from '@bootcamp-lawerning-page/teacher/module/module-teacher/module-teacher.component';
import { TabViewModule } from 'primeng/tabview';
import { OrderListModule } from 'primeng/orderlist';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [ModuleTeacherComponent],
  imports: [
    CommonModule,
    ModuleTeacherRoutingModule,
    TabViewModule,
    OrderListModule,
    PanelModule,
    ButtonModule,
    TableModule,
    CardModule,
  ],
})
export class ModuleTeacherModule {}
