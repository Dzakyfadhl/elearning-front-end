import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeStudentComponent } from '@bootcamp-lawerning-page/student/home-student/home-student.component';
import { CheckLoginGuard } from '../../../shared/check-login.guard';

const routes: Routes = [
  {
    path: 'student/home',
    component: HomeStudentComponent,

    canActivate: [CheckLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAvailableRoutingModule {}
