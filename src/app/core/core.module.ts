import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [CommonModule, CoreRoutingModule, RouterOutlet],
  declarations: [CoreComponent],
})
export class CoreModule {}
