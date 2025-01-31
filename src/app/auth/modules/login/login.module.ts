import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../../../@midway-UI/global/button/button/button.component';
import { InputInvalidDirective } from '../../../@midway-UI/global/input/input-invalid.directive';
import { SgInputContainerDirective } from '../../../@midway-UI/global/input/sg-input-container.directive';
import { SgInputErrorDirective } from '../../../@midway-UI/global/input/sg-input-error.directive';
import { MwAlertModule } from '../../../shared/components/alerts/mw-alert.module';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
import { EmailErrorSetterPipe } from '../shared/data/pipes/email-error-setter.pipe';
import { passwordErrorSetterPipe } from '../shared/data/pipes/password-error-setter.pipe';
import { OauthGoogleComponent } from './components/oauth-google/oauth-google.component';
import { LoginComponent } from './views/login.component';

const router: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    MwAlertModule,
    AuthBackgroundComponent,
    ButtonComponent,
    ShowPasswordDirective,
    SgInputContainerDirective,
    SgInputErrorDirective,
    InputInvalidDirective,
    EmailErrorSetterPipe,
    passwordErrorSetterPipe,
  ],
  declarations: [LoginComponent, OauthGoogleComponent],
})
export class LoginModule {}
