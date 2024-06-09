import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SuccesAlertComponent } from '../../components/alerts/views/succes-alert/succes-alert.component';
import { EventBus } from '../../base/event-bus.base';
import { TypeAlert } from '../../components/alerts/data/models/type-alert.models';
import { WarningAlertComponent } from '../../components/alerts/views/warning-alert/warning-alert.component';
import { ErrorAlertComponent } from '../../components/alerts/views/error-alert/error-alert.component';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastrService: ToastrService) {}

  public success(message: string, title?: string) {
    const toast = this.toastrService.success(message, title, {
      toastComponent: SuccesAlertComponent,
    });
    EventBus.getInstance().emit(TypeAlert.SUCCESS, toast.toastId);
  }

  public warning(message: string, title?: string) {
    const toast = this.toastrService.success(message, title, {
      toastComponent: WarningAlertComponent,
    });
    EventBus.getInstance().emit(TypeAlert.WARNING, toast.toastId);
  }

  public error(message: string, title?: string) {
    const toast = this.toastrService.success(message, title, {
      toastComponent: ErrorAlertComponent,
    });
    EventBus.getInstance().emit(TypeAlert.ERROR, toast.toastId);
  }

  public hideAll() {
    this.toastrService.toasts.forEach((toast) => toast.toastRef.close());
  }

  public getToaster(toasterID: number) {
    return this.toastrService.toasts.find(
      (toast) => toast.toastId === toasterID
    );
  }
}
