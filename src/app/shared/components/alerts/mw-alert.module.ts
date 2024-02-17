import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwAlertComponent } from './layout/mw-alert.component';
import { WarningAlertComponent } from './views/warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './views/succes-alert/succes-alert.component';
import { ErrorAlertComponent } from './views/error-alert/error-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MwAlertComponent,
    WarningAlertComponent,
    SuccesAlertComponent,
    ErrorAlertComponent
  ],
  exports: [MwAlertComponent]
})
export class MwAlertModule { }
