import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';
@Injectable({
  providedIn: 'root',
})
export class LoginExceptions {
  private errors = new Map<number, string>();
  constructor() {
    this.errors.set(404, 'La cuenta no existe');
    this.errors.set(401, 'La contraseña es incorrecta');
  }

  public throw(code: number): void {
    const message = this.errors.get(code);
    toast.dismiss();
    toast.error(message || 'Error!');
  }
}
