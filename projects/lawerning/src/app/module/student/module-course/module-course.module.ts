import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCourseRoutingModule } from './module-course-routing.module';
import { ModuleCourseComponent } from '@bootcamp-lawerning-page/student/module-course/module-course.component';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  declarations: [ModuleCourseComponent],
  imports: [
    CommonModule,
    ModuleCourseRoutingModule,
    BadgeModule,
    DividerModule,
    CardModule,
    ProgressBarModule
  ]
})
export class ModuleCourseModule { }
