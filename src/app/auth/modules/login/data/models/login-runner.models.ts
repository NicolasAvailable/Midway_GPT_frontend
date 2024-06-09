import { Runner } from '../../../../../shared/models/runner.models';
import { Login } from './login.models';
import { ErrorMiwday } from '../../../../../shared/models/error-midway.models';

export class LoginRunner extends Runner<Login> {
  constructor(
    private email: string,
    private password: string,
    loginError: ErrorMiwday
  ) {
    super(loginError);
  }
  protected override create(): Login {
    return Login.create(this.email, this.password);
  }
}
