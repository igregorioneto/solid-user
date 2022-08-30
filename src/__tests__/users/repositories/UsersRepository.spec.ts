import { validate } from "uuid";

import { User } from "../../../modules/users/model/User";
import { UserRepository } from "../../../modules/users/repositories/implementations/UserRepository";

describe("UsersRepository", () => {
  let usersRepository: UserRepository;

  beforeAll(() => {
    usersRepository = UserRepository.getInstance();
  });

  it("should be able to create new users", () => {
    const user = usersRepository.create({
      name: "Teste",
      email: "teste@teste.com",
      admin: false,
    });

    expect(user).toMatchObject({
      name: "Teste",
      email: "teste@teste.com",
      admin: false,
    });
    expect(validate(user.id as string)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });

  it("should be able to find user by ID", () => {
    const user = usersRepository.create({
      name: "Teste",
      email: "teste@teste.com",
      admin: false,
    });

    const findUser = usersRepository.findByName(user.name);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      admin: false,
    });
    expect(validate(findUser.id as string)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });

  it("should be able to turn an user as admin", () => {
    const user = usersRepository.create({
      name: "Teste",
      email: "teste@teste.com",
      admin: false,
    });

    const admin = usersRepository.findByEmail(user.email);

    expect(admin).toMatchObject({
      name: user.name,
      email: user.email,
      admin: true,
    });
    expect(validate(user.id as string)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});
