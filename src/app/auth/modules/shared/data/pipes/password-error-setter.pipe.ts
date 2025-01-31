import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordErrorSetter',
  standalone: true,
})
export class passwordErrorSetterPipe implements PipeTransform {
  private errors: Map<string, string> = new Map();

  constructor() {
    this.errors.set('required', 'La contraseña es requerida');
    this.errors.set(
      'minlength',
      'La contraseña debe tener al menos 6 caracteres'
    );
    this.errors.set('whitespace', 'No se permiten espacios en blanco');
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
