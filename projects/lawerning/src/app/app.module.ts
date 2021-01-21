import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { Page404Component } from './page/page404/page404.component';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    Page404Component,
    DashboardAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }