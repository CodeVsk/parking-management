import { UserDto } from "../../../../application/dtos/user-dto";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByEnrollmentUserUseCase } from "./find-by-enrollment-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const sut = new FindByEnrollmentUserUseCase(repository);

    const enrollment: string = "123";

    const response = sut.execute(enrollment);

    expect(response).toBeTruthy();
  });
});
