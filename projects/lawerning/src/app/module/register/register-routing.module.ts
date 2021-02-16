import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from '@bootcamp-lawerning-page/register-page/register-page.component';
import { CheckLoginGuard } from '../../shared/check-login.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [CheckLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
