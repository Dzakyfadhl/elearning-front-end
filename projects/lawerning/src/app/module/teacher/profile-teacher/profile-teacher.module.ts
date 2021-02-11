import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileTeacherRoutingModule } from './profile-teacher-routing.module';
import { ProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/profile-teacher/profile-teacher.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BlockUIModule } from 'primeng/blockui';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { UpdateProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/update-profile-teacher/update-profile-teacher.component';
import { UpdateProfileRoutingModule } from '../../student/update-profile/update-profile-routing.module';

@NgModule({
  declarations: [ProfileTeacherComponent],
  imports: [
    CommonModule,
    ProfileTeacherRoutingModule,
    KnobModule,
    FormsModule,
    DialogModule,
    BlockUIModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
  ],
})
export class ProfileTeacherModule {}
