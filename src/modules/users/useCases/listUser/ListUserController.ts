import { Request, Response } from "express";

import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email } = request.body;

    const all = this.listUserUseCase.execute(email);
    return response.json(all);
  }
}

export { ListUserController };
