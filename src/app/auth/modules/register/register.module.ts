import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '@midway-ui/global/button/button.component';
import { MwInputContainerDirective } from '@midway-ui/global/input/mw-input-container.directive';
import { MwInputErrorDirective } from '@midway-ui/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '@midway-ui/global/input/mw-input-invalid.directive';
import { MwInputDirective } from '@midway-ui/global/input/mw-input.directive';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
import { ConfirmPasswordErrorSetterPipe } from '../shared/data/pipes/confirm-password-error-setter.pipe';
import { EmailErrorSetterPipe } from '../shared/data/pipes/email-error-setter.pipe';
import { NameErrorSetterPipe } from '../shared/data/pipes/name-error-setter.pipe';
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
    MwInputDirective,
    MwInputContainerDirective,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    ShowPasswordDirective,
    EmailErrorSetterPipe,
    PasswordErrorSetterPipe,
    ConfirmPasswordErrorSetterPipe,
    NameErrorSetterPipe,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
