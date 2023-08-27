import { UserDto } from "../../../../application/dtos/user-dto";
import { mapper } from "@/application/mappers/mapper-config";

import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { UpdateUserUseCase } from "./update-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new UpdateUserUseCase(repository);

    const dataSource: UserDto = {
      name: "",
      email: "",
      phone: "",
      address: "",
      rg: "",
      cpf: "",
      gender: "",
      course: "",
      enrollment: "",
      status: true,
      collegeId: "",
      birthdate: null,
      role: "EMPLOYEE",
      permissions: "ADMIN",
      password: "123456",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
