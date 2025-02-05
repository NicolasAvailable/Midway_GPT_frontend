import { FormGroup } from '@angular/forms';
import { Adapter } from '../../../../../shared/models/adapter.models';
import { LoginBody } from './login-body.models';

export class LoginBodyAdapter implements Adapter<LoginBody> {
  constructor(private form: FormGroup) {}
  public adapt() {
    return {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
  }
}
