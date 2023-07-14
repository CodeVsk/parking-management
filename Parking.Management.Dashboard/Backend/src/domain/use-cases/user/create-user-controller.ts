import { Request } from "express";
import { CreateUserUseCase } from "./create-user-usecase";
import { HttpResponse, error, ok } from "../../../presentation/protocols/http";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request): Promise<HttpResponse<string>> {
    const {
      name,
      email,
      phone,
      address,
      rg,
      cpf,
      gender,
      course,
      enrollment,
      status,
      collegeId,
      birthdate,
    } = request.body;

    try {
      const userRequestReturn = await this.createUserUseCase.execute({
        name,
        email,
        phone,
        address,
        rg,
        cpf,
        gender,
        course,
        enrollment,
        status,
        collegeId,
        birthdate,
      });

      console.table(request.body);

      return ok(userRequestReturn);
    } catch (err) {
      return error(err);
    }
  }
}
