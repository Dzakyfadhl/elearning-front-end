import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from '@bootcamp-lawerning-page/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckLoginGuard } from '../../shared/check-login.guard';
import { Permissions } from '../../shared/permissions';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    RadioButtonModule,
    DropdownModule,
  ],
  providers: [CheckLoginGuard, Permissions],
})
export class RegisterModule {}
