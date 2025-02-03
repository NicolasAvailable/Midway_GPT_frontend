import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorSetter',
  standalone: true,
})
export class ErrorSetterPipe implements PipeTransform {
  protected errors: Map<string, string> = new Map();

  public transform(errors: Record<string, any> | null): any {
    if (errors !== null) {
      const keys = Object.keys(errors);
      return this.errors.get(keys[0]);
    } else {
      return '';
    }
  }
}
