import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameErrorSetter',
  standalone: true,
})
export class NameErrorSetterPipe implements PipeTransform {
  private errors = new Map<string, string>([]);
  constructor() {
    this.errors.set('required', 'El nombre es requerido');
    this.errors.set('minlength', 'El nombre debe tener al menos 5 caracteres');
    this.errors.set(
      'maxlength',
      'El nombre no puede tener más de 100 caracteres'
    );
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
