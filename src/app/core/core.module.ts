import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './view/core.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
