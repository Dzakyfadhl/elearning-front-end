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
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AdminSubjectRoutingModule } from './admin-subject-routing.module';
import { AdminSubjectComponent } from '../../../page/admin/admin-subject/admin-subject.component';
import { ModifAdminSubjectComponent } from '../../../page/admin/admin-subject/modif-admin-subject/modif-admin-subject.component';

@NgModule({
  declarations: [AdminSubjectComponent, ModifAdminSubjectComponent],
  imports: [
    CommonModule,
    AdminSubjectRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
  ],
})
export class AdminSubjectModule {}
