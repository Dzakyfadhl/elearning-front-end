import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAvailableRoutingModule } from './module-available-routing.module';
import { ModuleAvailableComponent } from '@bootcamp-lawerning-page/student/module-available/module-available.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
@NgModule({
  declarations: [ModuleAvailableComponent],
  imports: [
    CommonModule,
    ModuleAvailableRoutingModule,
    FieldsetModule,
    DividerModule,
    ScrollPanelModule,
    ButtonModule,
    PanelModule,
    TooltipModule,
    SkeletonModule
  ]
})
export class ModuleAvailableModule { }
