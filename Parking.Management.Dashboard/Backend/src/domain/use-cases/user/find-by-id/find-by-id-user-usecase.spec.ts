import { UserDto } from "../../../../application/dtos/user-dto";
import { UserMapper } from "../../../../application/mappers/user-mapper";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const mapper = new UserMapper();
    const repository = new PrismaUserRepository();
    const sut = new FindByIdUserUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
