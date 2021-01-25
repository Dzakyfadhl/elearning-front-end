import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
import {AvatarModule} from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ProfileTeacherComponent } from './page/teacher/profile-teacher/profile-teacher.component';

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
    AppRoutingModule,
    FormsModule,
    AvatarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }