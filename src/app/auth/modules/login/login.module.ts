import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MwAlertModule } from '../../../shared/components/alerts/mw-alert.module';

const router: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    MwAlertModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
