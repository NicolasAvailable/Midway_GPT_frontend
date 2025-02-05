import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class RegisterExceptions {
  private errors = new Map<number, string>([]);
  constructor() {
    this.errors.set(409, 'La cuenta ya existe');
  }

  public throw(code: number) {
    const message = this.errors.get(code);
    toast.dismiss();
    toast.error(message);
  }
}
