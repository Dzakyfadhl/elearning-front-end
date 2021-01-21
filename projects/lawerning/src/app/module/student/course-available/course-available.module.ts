import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAvailableRoutingModule } from './course-available-routing.module';
import { HomeStudentComponent } from '@bootcamp-lawerning-page/student/home-student/home-student.component';
import { ButtonModule } from 'primeng/button';
import { ModuleAvailableModule } from '../module-available/module-available.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeStudentComponent
  ],
  imports: [
    CommonModule,
    CourseAvailableRoutingModule,
    ModuleAvailableModule,
    ButtonModule,
    FormsModule
  ]
})
export class CourseAvailableModule { }
