export class Email {
  private value: string;

  private constructor(email: string) {
    if (email.length < 10 || !email.includes('@')) {
      throw Error('Invalid email');
    }
    this.value = email;
  }

  static value(email: string): string {
    return new Email(email).value;
  }
}
