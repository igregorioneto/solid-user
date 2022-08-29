import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  admin: boolean;
  email: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ name, admin, email }: IRequest): void {
    const userAlreadyExists = this.userRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.userRepository.create({ name, admin, email });
  }
}

export { CreateUserUseCase };
