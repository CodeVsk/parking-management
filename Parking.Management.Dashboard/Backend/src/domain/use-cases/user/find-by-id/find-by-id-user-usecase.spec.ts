import { UserDto } from "../../../../application/dtos/user-dto";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByIdUserUseCase } from "./find-by-id-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new FindByIdUserUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
