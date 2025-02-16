import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionErrorSetter',
  standalone: true,
})
export class DescriptionErrorSetterPipe implements PipeTransform {
  private errors = new Map<string, string>([]);
  constructor() {
    this.errors.set(
      'maxlength',
      'La descripción no puede tener más de 400 caracteres'
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
