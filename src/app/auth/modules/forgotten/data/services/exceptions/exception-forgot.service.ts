import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ExceptionForgotService {
  private errors = new Map<number, string>([]);
  constructor() {}

  public throw(code: number) {
    toast.dismiss();
    toast.error(
      'Ha ocurrido un error. Por favor, vuelva a intentarlo en unos minutos.'
    );
  }
}
