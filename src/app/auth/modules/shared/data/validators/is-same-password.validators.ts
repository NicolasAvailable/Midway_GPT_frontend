import { FormGroup, ValidationErrors } from '@angular/forms';

export const isSamePasswordValidator = (
  formGroup: FormGroup
): ValidationErrors | null => {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordIsNotSame: true }
    : null;
};
