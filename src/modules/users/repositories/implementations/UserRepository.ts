import { User } from "../../model/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = [];
  }

  findByEmail(email: string): boolean {
    const user = this.users.find((user) => user.email === email);
    return user?.admin === true;
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }
    return UserRepository.INSTANCE;
  }

  findByName(name: string): User {
    const user = this.users.find((user) => user.name === name)!;
    return user;
  }

  list(): User[] {
    return this.users;
  }

  create({ name, admin, email }: ICreateUserDTO): void {
    const user: User = new User();

    Object.assign(user, {
      name,
      admin,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
  }
}

export { UserRepository };
