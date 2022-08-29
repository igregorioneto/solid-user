import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): User[] {
    return this.userRepository.list();
  }
}

export { ListUserUseCase };
