import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { CreateUserUseCase } from "./create-user-usecase";
import { UserRoles } from "../../../enums";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const mapper = new UserMapper();
    const repository = new PrismaUserRepository();
    const sut = new CreateUserUseCase(repository, mapper);

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
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
