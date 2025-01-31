import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailErrorSetter',
  standalone: true,
})
export class EmailErrorSetterPipe implements PipeTransform {
  private errors: Map<string, string> = new Map();

  constructor() {
    this.errors.set('required', 'El email es requerido');
    this.errors.set('pattern', 'Ingresa un email valido');
    this.errors.set('minlength', 'El email debe tener al menos 4 caracteres');
  }

  transform(errors: Record<string, any> | null): any {
    if (errors !== null) {
      const keys = Object.keys(errors);
      return this.errors.get(keys[0]);
    } else {
      return '';
    }
  }
}
