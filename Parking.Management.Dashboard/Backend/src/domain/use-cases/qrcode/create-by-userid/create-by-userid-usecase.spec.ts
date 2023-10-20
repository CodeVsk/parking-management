import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { CreateUserUseCase } from "./create-user-usecase";
import { UserRoles } from "../../../enums";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new CreateUserUseCase(repository);

    const dataSource: UserDto = {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      password: "",
      permissions: "DEFAULT",
      state: "",
      rg: "",
      cpf: "",
      gender: "O",
      courseId: "",
      enrollment: "",
      status: true,
      collegeId: "",
      birthdate: null,
      role: "EMPLOYEE",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
