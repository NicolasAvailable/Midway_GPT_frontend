import { LoginEmail } from './login-email.models';
import { LoginPassword } from './login-password.models';

export class Login {
  public static create(email: string, password: string) {
    const loginEmail = LoginEmail.create(email);
    const loginPassword = LoginPassword.create(password);
    return new Login(loginEmail, loginPassword);
  }

  private constructor(
    private loginEmail: LoginEmail,
    private loginPassword: LoginPassword
  ) {}

  public values() {
    return {
      username: this.loginEmail.value,
      password: this.loginPassword.value,
    };
  }
}
