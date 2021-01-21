import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { Page404Component } from './page/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
