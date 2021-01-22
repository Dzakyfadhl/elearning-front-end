import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileStudentRoutingModule } from './profile-student-routing.module';
import { ProfileStudentComponent } from '@bootcamp-lawerning-page/student/profile-student/profile-student.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileStudentComponent],
  imports: [
    CommonModule,
    ProfileStudentRoutingModule,
    KnobModule,
    FormsModule
  ]
})
export class ProfileStudentModule { }
