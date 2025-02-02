import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../../../@midway-UI/global/button/button/button.component';
import { MwInputInvalidDirective } from '../../../@midway-UI/global/input/input-invalid.directive';
import { MwInputContainerDirective } from '../../../@midway-UI/global/input/mw-input-container.directive';
import { MwInputErrorDirective } from '../../../@midway-UI/global/input/mw-input-error.directive';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
import { ConfirmPasswordErrorSetterPipe } from '../shared/data/pipes/confirm-password-error-setter.pipe';
import { EmailErrorSetterPipe } from '../shared/data/pipes/email-error-setter.pipe';
import { PasswordErrorSetterPipe } from '../shared/data/pipes/password-error-setter.pipe';
import { RegisterComponent } from './register.component';

const router: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    AuthBackgroundComponent,
    ButtonComponent,
    MwInputContainerDirective,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    ShowPasswordDirective,
    EmailErrorSetterPipe,
    PasswordErrorSetterPipe,
    ConfirmPasswordErrorSetterPipe,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
