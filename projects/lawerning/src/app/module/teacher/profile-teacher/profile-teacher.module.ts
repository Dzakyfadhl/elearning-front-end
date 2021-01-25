import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileTeacherRoutingModule } from './profile-teacher-routing.module';
import { ProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/profile-teacher/profile-teacher.component';


@NgModule({
  declarations: [
    ProfileTeacherComponent
  ],
  imports: [
    CommonModule,
    ProfileTeacherRoutingModule
  ]
})
export class ProfileTeacherModule { }
