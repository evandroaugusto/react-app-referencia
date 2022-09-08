/* eslint-disable no-redeclare */
import { UserDTO } from "../api/dto/user.dto";
import { Email } from "./Email";

type Id = number;

export class User {
  readonly id: Id;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly jobTitle: string;
  readonly gender?: string | null;
  readonly image?: string | undefined;
  readonly about?: string | null;

  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = Email.value(user.email);
    this.jobTitle = user.jobTitle;
    this.gender = user.gender || undefined;
    this.image = user.image || undefined;
    this.about = user.about || undefined;
  }

  //
  // Esse caso é utilizado quando é necessário trabalhar com um "modelo rico" no frontend
  // adicionando comportamentos à classe. Se o modelo do front for exatamente igual ao fornecido
  // pela api. Somente uma "Interface" ou "type" já é o suficiente (neste caso não seria necessário,
  // pois está servindo apenas como um "proxy")
  //

  static fromDTO(dto: UserDTO): User {
    return new User({
      id: dto.id,
      firstName: dto.first_name,
      lastName: dto.last_name,
      email: dto.email,
      gender: dto.gender,
      jobTitle: dto.job_title,
      image: dto.image,
      about: dto.about,
    });
  }

  static toDTO(user: User): UserDTO {
    return {
      id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      gender: user.gender || undefined,
      job_title: user.jobTitle,
      image: user.image || undefined,
      about: user.about || undefined,
    };
  }
}
