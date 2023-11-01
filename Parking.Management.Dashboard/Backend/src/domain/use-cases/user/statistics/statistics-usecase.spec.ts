import { UserDto } from "../../../../application/dtos/user-dto";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { StatisticsUserUseCase } from "./statistics-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new StatisticsUserUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
