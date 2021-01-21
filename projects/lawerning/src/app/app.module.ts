import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
