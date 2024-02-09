import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
