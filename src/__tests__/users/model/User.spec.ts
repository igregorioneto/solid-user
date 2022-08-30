import { validate } from "uuid";

import { User } from "../../../modules/users/model/User";

describe("User model", () => {
  it("should be able to create an use with all props", () => {
    const user = new User();

    Object.assign(user, {
      name: "Teste",
      email: "teste@teste.com",
      created_at: new Date(),
      updated_at: new Date(),
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
});
