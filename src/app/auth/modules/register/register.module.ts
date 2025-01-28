import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthBackgroundComponent } from '../shared/components/auth-background/auth-background.component';
import { ShowPasswordDirective } from '../shared/data/directives/show-password.directive';
import { RegisterComponent } from './register.component';

const router: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    AuthBackgroundComponent,
    ShowPasswordDirective,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
