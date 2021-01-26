import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

import { AdminStudentRoutingModule } from './admin-student-routing.module';
import { AdminStudentComponent } from '../../../page/admin/admin-student/admin-student.component';


@NgModule({
  declarations: [AdminStudentComponent],
  imports: [
    CommonModule,
    AdminStudentRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
  ]
})
export class AdminStudentModule { }
