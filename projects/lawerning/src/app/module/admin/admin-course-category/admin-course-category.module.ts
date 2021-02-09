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

import { AdminCourseCategoryRoutingModule } from './admin-course-category-routing.module';
import { CourseCategoryComponent } from '@bootcamp-lawerning-page/admin/course-category/course-category.component';

@NgModule({
  declarations: [CourseCategoryComponent],
  imports: [
    CommonModule,
    AdminCourseCategoryRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
  ],
})
export class AdminCourseCategoryModule {}
