import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from '@bootcamp-lawerning-page/admin/home-admin/home-admin.component';
import { CheckLoginGuard } from '../../shared/check-login.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeAdminComponent,

    canActivate: [CheckLoginGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
