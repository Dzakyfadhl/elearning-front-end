import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTeacherRoutingModule } from './admin-teacher-routing.module';
import { AdminTeacherComponent } from '../../../page/admin/admin-teacher/admin-teacher.component';
import { ModifAdminTeacherComponent } from '../../../page/admin/admin-teacher/modif-admin-teacher/modif-admin-teacher.component';


@NgModule({
  declarations: [AdminTeacherComponent, ModifAdminTeacherComponent],
  imports: [
    CommonModule,
    AdminTeacherRoutingModule
  ]
})
export class AdminTeacherModule { }
