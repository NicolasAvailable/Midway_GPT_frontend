import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../../../@midway-UI/global/button/button.component';
import { MwInputContainerDirective } from '../../../@midway-UI/global/input/mw-input-container.directive';
import { MwInputErrorDirective } from '../../../@midway-UI/global/input/mw-input-error.directive';
import { MwInputInvalidDirective } from '../../../@midway-UI/global/input/mw-input-invalid.directive';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
import { EmailErrorSetterPipe } from '../shared/data/pipes/email-error-setter.pipe';
import { PasswordErrorSetterPipe } from '../shared/data/pipes/password-error-setter.pipe';
import { OauthGoogleComponent } from './components/oauth-google/oauth-google.component';
import { LoginComponent } from './login.component';

const router: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    AuthBackgroundComponent,
    ButtonComponent,
    ShowPasswordDirective,
    MwInputContainerDirective,
    MwInputErrorDirective,
    MwInputInvalidDirective,
    EmailErrorSetterPipe,
    PasswordErrorSetterPipe,
  ],
  declarations: [LoginComponent, OauthGoogleComponent],
})
export class LoginModule {}
