import { Injectable } from '@angular/core';
import { ErrorMiwday } from '../../../../../../shared/models/error-midway.models';
import { ToasterService } from '../../../../../../shared/services/toaster/toaster.service';

@Injectable({
  providedIn: 'root',
})
export class LoginErrorService extends ErrorMiwday {
  private errors = new Map<number, string>();
  constructor(private toasterService: ToasterService) {
    super();
    this.errors.set(404, 'The account does not exist');
  }

  override showError(code: number): void {
    const message = this.errors.get(code);
    this.toasterService.hideAll();
    this.toasterService.error(message || 'Error!');
  }
}
