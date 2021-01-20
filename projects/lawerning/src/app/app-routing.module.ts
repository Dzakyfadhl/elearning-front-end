import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
const routes : Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
