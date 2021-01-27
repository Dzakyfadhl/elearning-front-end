import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreDetailRoutingModule } from './score-detail-routing.module';
import { ScoreDetailComponent } from '@bootcamp-lawerning-page/student/score-detail/score-detail.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  declarations: [ScoreDetailComponent],
  imports: [
    CommonModule,
    ScoreDetailRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    ProgressBarModule
  ]
})
export class ScoreDetailModule { }
