import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import { DtlModuleRoutingModule } from './dtl-module-routing.module';
import { DtlModuleComponent } from '@bootcamp-lawerning-page/teacher/dtl-module/dtl-module.component';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BlockUIModule} from 'primeng/blockui';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    DtlModuleComponent
  ],
  imports: [
    CommonModule,
    DtlModuleRoutingModule,
    TabViewModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    BlockUIModule,
    InputTextareaModule,
    CalendarModule
  ]
})
export class DtlModuleModule { }
