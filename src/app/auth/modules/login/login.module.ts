import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MwAlertModule } from '../../../shared/components/alerts/mw-alert.module';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
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
    ShowPasswordDirective,
  ],
  declarations: [LoginComponent, OauthGoogleComponent],
})
export class LoginModule {}
