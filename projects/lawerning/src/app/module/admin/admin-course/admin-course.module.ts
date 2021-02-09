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
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AdminCourseRoutingModule } from './admin-course-routing.module';
import { AdminCourseComponent } from '../../../page/admin/admin-course/admin-course.component';
import { ModifAdminCourseComponent } from '../../../page/admin/admin-course/modif-admin-course/modif-admin-course.component';

@NgModule({
  declarations: [AdminCourseComponent, ModifAdminCourseComponent],
  imports: [
    CommonModule,
    AdminCourseRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
  ],
})
export class AdminCourseModule {}
