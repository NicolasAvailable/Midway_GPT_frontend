import { Pipe, type PipeTransform } from '@angular/core';
import { ErrorSetterPipe } from './error-setter.pipe';

@Pipe({
  name: 'passwordErrorSetter',
  standalone: true,
})
export class PasswordErrorSetterPipe
  extends ErrorSetterPipe
  implements PipeTransform
{
  constructor() {
    super();
    this.errors.set('required', 'La contraseña es requerida');
    this.errors.set(
      'minlength',
      'La contraseña debe tener al menos 6 caracteres'
    );
    this.errors.set('whitespace', 'No se permiten espacios en blanco');
  }
}
