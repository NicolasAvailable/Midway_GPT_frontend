import { Injectable } from '@angular/core';
import { ErrorMiwday } from '../../../../../../shared/models/error-midway.models';

@Injectable({
  providedIn: 'root',
})
export class LoginErrorService extends ErrorMiwday {
  private errors = new Map<number, string>();
  constructor() {
    super();
    this.errors.set(404, 'The account does not exist');
  }

  override showError(code: number): void {
    const message = this.errors.get(code);
    // this.toasterService.hideAll();
    // this.toasterService.error(message || 'Error!');
  }
}
