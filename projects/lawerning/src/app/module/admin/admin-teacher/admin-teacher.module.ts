import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AdminTeacherRoutingModule } from './admin-teacher-routing.module';
import { AdminTeacherComponent } from '../../../page/admin/admin-teacher/admin-teacher.component';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [AdminTeacherComponent],
  imports: [
    CommonModule,
    AdminTeacherRoutingModule,
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
export class AdminTeacherModule {}
