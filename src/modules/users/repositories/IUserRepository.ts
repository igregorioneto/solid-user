import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  admin: boolean;
  email: string;
}

interface IUserRepository {
  findByName(name: string): User;
  list(): User[];
  create({ name, admin, email }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };
