import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfileTeacherRoutingModule } from './update-profile-teacher-routing.module';
import { UpdateProfileTeacherComponent } from '@bootcamp-lawerning-page/teacher/update-profile-teacher/update-profile-teacher.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { ChangePasswordComponent } from '../../../page/teacher/change-password/change-password.component';

@NgModule({
  declarations: [UpdateProfileTeacherComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UpdateProfileTeacherRoutingModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
  ],
})
export class UpdateProfileTeacherModule {}
