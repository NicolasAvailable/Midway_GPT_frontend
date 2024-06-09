import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterOutlet, AuthRoutingModule],
})
export class AuthModule {}
