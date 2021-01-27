import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDetailRoutingModule } from './module-detail-routing.module';
import { ModuleDetailComponent } from '@bootcamp-lawerning-page/student/module-detail/module-detail.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderListModule } from 'primeng/orderlist';
import { ChipModule } from 'primeng/chip';
@NgModule({
  declarations: [ModuleDetailComponent],
  imports: [
    CommonModule,
    ModuleDetailRoutingModule,
    TabViewModule,
    ButtonModule,
    FieldsetModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    OrderListModule,
    ChipModule
  ]
})
export class ModuleDetailModule { }
