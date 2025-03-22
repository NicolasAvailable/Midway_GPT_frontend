import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ExceptionForgotEmailSenderService {
  private errors = new Map<number, string>([]);
  constructor() {
    this.errors.set(409, 'La cuenta no existe');
    this.errors.set(
      400,
      'El dominio debe ser uno de los siguientes valores: https://midway-frontend.vercel.app, http://localhost:4200'
    );
  }

  public throw(code: number) {
    const message = this.errors.get(code);
    toast.dismiss();
    toast.error(message);
  }
}
