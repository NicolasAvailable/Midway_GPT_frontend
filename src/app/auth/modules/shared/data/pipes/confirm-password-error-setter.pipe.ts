import { Pipe, PipeTransform } from '@angular/core';
import { PasswordErrorSetterPipe } from './password-error-setter.pipe';

@Pipe({
  name: 'confirmPasswordErrorSetter',
  standalone: true,
})
export class ConfirmPasswordErrorSetterPipe
  extends PasswordErrorSetterPipe
  implements PipeTransform
{
  constructor() {
    super();
    this.errors.set('passwordIsNotSame', 'Las contraseñas no coinciden');
  }
}
