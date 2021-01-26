import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AdminCourseTypeRoutingModule } from './admin-course-type-routing.module';
import { AdminCourseTypeComponent } from '../../../page/admin/admin-course-type/admin-course-type.component';


@NgModule({
  declarations: [AdminCourseTypeComponent],
  imports: [
    CommonModule,
    AdminCourseTypeRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule
  ]
})
export class AdminCourseTypeModule { }
