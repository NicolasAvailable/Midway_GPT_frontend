import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './view/core.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from './modules/navbar/navbar.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    NavbarModule,
    RouterOutlet,
  ],
  declarations: [CoreComponent],
})
export class CoreModule {}
