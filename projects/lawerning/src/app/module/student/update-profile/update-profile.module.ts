import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateProfileRoutingModule } from './update-profile-routing.module';
import { UpdateProfileStudentComponent } from '@bootcamp-lawerning-page/student/update-profile-student/update-profile-student.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [UpdateProfileStudentComponent],
  imports: [
    CommonModule,
    UpdateProfileRoutingModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
  ],
})
export class UpdateProfileModule {}
