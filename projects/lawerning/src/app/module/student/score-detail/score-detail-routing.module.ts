import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreDetailComponent } from '@bootcamp-lawerning-page/student/score-detail/score-detail.component';

const routes: Routes = [
  {
    path: 'report',
    component: ScoreDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreDetailRoutingModule {}
