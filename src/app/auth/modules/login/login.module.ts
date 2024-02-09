import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login.component';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
