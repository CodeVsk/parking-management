import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { DeleteUserUseCase } from "./delete-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new DeleteUserUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
