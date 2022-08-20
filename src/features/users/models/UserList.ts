import { Email } from './Email';

export class UserList {
  readonly id: number;
  readonly firstName: string;
  readonly email: string | null;

  constructor({
    id,
    firstName,
    email,
  }: {
    id: number;
    firstName: string;
    email: string;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.email = Email.value(email);
  }
}
