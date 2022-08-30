import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
}

class ProfileUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email }: IRequest): boolean {
    return this.userRepository.findByEmail(email);
  }
}

export { ProfileUserUseCase };
