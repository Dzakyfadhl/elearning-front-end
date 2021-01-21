import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeStudentComponent } from '@bootcamp-lawerning-page/home-student/home-student.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomeStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ButtonModule
  ]
})
export class StudentModule { }
