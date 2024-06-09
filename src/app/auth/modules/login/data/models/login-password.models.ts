export class LoginPassword {
  static create(assword: string) {
    return new LoginPassword(assword);
  }
  private constructor(public value: string) {}
}
