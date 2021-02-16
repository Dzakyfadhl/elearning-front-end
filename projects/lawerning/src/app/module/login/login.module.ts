import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from '@bootcamp-lawerning-page/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { CheckLoginGuard } from '../../shared/check-login.guard';
import { Permissions } from '../../shared/permissions';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
  providers: [CheckLoginGuard, Permissions],
})
export class LoginModule {}
