import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

import { AdminCourseTypeRoutingModule } from './admin-course-type-routing.module';
import { AdminCourseTypeComponent } from '../../../page/admin/admin-course-type/admin-course-type.component';

@NgModule({
  declarations: [AdminCourseTypeComponent],
  imports: [
    CommonModule,
    AdminCourseTypeRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    TagModule,
  ],
})
export class AdminCourseTypeModule {}
