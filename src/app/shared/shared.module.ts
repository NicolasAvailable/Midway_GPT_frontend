import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwAlertModule } from './components/alerts/mw-alert.module';

@NgModule({
  imports: [
    CommonModule,
    MwAlertModule
  ],
  declarations: []
})
export class SharedModule { }
