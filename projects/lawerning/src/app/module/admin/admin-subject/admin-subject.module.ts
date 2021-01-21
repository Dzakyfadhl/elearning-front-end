import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSubjectRoutingModule } from './admin-subject-routing.module';
import { AdminSubjectComponent } from '../../../page/admin/admin-subject/admin-subject.component';
import { ModifAdminSubjectComponent } from '../../../page/admin/admin-subject/modif-admin-subject/modif-admin-subject.component';


@NgModule({
  declarations: [AdminSubjectComponent, ModifAdminSubjectComponent],
  imports: [
    CommonModule,
    AdminSubjectRoutingModule
  ]
})
export class AdminSubjectModule { }
