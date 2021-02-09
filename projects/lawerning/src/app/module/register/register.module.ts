import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPageComponent } from '@bootcamp-lawerning-page/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    RadioButtonModule,
    DropdownModule,
    ValidateEqualModule,
  ],
})
export class RegisterModule {}
