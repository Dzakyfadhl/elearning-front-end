import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './layout/dashboard-admin/dashboard-admin.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { BaseHttpInterceptor } from './shared/base-http-interceptor';
import { ToastModule } from 'primeng/toast';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CarouselModule } from 'primeng/carousel';
import { DetailCourseModule } from './module/detail-course/detail-course.module';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckLoginGuard } from './shared/check-login.guard';
import { Permissions } from './shared/permissions';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    DashboardAdminComponent,
    HomePageComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    DetailCourseModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AvatarModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    ScrollTopModule,
    CarouselModule,
    FontAwesomeModule,
  ],
  providers: [
    ConfirmationService,
    CheckLoginGuard,
    Permissions,
    { provide: HTTP_INTERCEPTORS, useClass: BaseHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
