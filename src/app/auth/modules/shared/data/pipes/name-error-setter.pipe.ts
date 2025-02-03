import { Pipe, type PipeTransform } from '@angular/core';
import { ErrorSetterPipe } from './error-setter.pipe';

@Pipe({
  name: 'nameErrorSetter',
  standalone: true,
})
export class NameErrorSetterPipe
  extends ErrorSetterPipe
  implements PipeTransform
{
  constructor() {
    super();
    this.errors.set('required', 'El nombre es requerido');
    this.errors.set('minlength', 'El nombre debe tener al menos 5 caracteres');
  }
}
