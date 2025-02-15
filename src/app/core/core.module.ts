import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavbarModule } from './modules/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, CoreRoutingModule, NavbarModule, RouterOutlet],
  declarations: [CoreComponent],
})
export class CoreModule {}
