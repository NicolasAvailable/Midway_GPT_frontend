import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './views/warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './views/succes-alert/succes-alert.component';
import { ErrorAlertComponent } from './views/error-alert/error-alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WarningAlertComponent,
    SuccesAlertComponent,
    ErrorAlertComponent,
  ],
  exports: [WarningAlertComponent, SuccesAlertComponent, ErrorAlertComponent],
})
export class MwAlertModule {}
