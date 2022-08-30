import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
}
class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email }: IRequest): User[] {
    const isAdmin = this.userRepository.findByEmail(email);
    if (!isAdmin) {
      throw new Error("User is not admin");
    } else {
      return this.userRepository.list();
    }
  }
}

export { ListUserUseCase };
