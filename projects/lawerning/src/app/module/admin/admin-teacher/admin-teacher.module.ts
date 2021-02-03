import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AdminTeacherRoutingModule } from './admin-teacher-routing.module';
import { AdminTeacherComponent } from '../../../page/admin/admin-teacher/admin-teacher.component';
import { ModifAdminTeacherComponent } from '../../../page/admin/admin-teacher/modif-admin-teacher/modif-admin-teacher.component';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AdminTeacherComponent, ModifAdminTeacherComponent],
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
  ],
})
export class AdminTeacherModule {}
