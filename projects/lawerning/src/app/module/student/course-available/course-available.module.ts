import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAvailableRoutingModule } from './course-available-routing.module';
import { HomeStudentComponent } from '@bootcamp-lawerning-page/student/home-student/home-student.component';
import { ButtonModule } from 'primeng/button';
import { ModuleAvailableModule } from '../module-available/module-available.module';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { SkeletonModule } from 'primeng/skeleton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { CheckLoginGuard } from '../../../shared/check-login.guard';
import { Permissions } from '../../../shared/permissions';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [HomeStudentComponent],
  imports: [
    CommonModule,
    CourseAvailableRoutingModule,
    ModuleAvailableModule,
    ButtonModule,
    FormsModule,
    OrderListModule,
    SkeletonModule,
    InputTextModule,
    TooltipModule,
    ScrollPanelModule,
  ],
  providers: [CheckLoginGuard, Permissions],
})
export class CourseAvailableModule {}
