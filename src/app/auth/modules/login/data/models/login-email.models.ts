export class LoginEmail {
  static create(email: string) {
    return new LoginEmail(email);
  }
  private constructor(public value: string) {}
}
