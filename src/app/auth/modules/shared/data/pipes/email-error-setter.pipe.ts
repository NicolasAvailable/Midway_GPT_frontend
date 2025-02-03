import { Pipe, type PipeTransform } from '@angular/core';
import { ErrorSetterPipe } from './error-setter.pipe';

@Pipe({
  name: 'emailErrorSetter',
  standalone: true,
})
export class EmailErrorSetterPipe
  extends ErrorSetterPipe
  implements PipeTransform
{
  constructor() {
    super();
    this.errors.set('required', 'El email es requerido');
    this.errors.set('pattern', 'Ingresa un email valido');
    this.errors.set('minlength', 'El email debe tener al menos 4 caracteres');
    this.errors.set('whitespace', 'No se permiten espacios en blanco');
  }
}
