import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/home-teacher/home-teacher.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    HomeTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ButtonModule
  ]
})
export class TeacherModule { }
