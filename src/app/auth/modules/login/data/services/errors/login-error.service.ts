import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
import { ErrorMiwday } from '../../../../../../shared/models/error-midway.models';
@Injectable({
  providedIn: 'root',
})
export class LoginErrorService extends ErrorMiwday {
  private errors = new Map<number, string>();
  constructor() {
    super();
    this.errors.set(404, 'La cuenta no existe');
    this.errors.set(401, 'La contraseña es incorrecta');
  }

  override showError(code: number): void {
    const message = this.errors.get(code);
    toast.dismiss();
    toast.error(message || 'Error!');
  }
}
