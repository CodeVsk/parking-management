import { AuthProvider } from "@/infra/providers";
import { UserDto } from "../../../../application/dtos/user-dto";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { FindByIdUserUseCase } from "../find-by-id/find-by-id-user-usecase";
import { FindByTokenUserUseCase } from "./find-by-token-user-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const useCase = new FindByIdUserUseCase(repository);
    const provider = new AuthProvider();

    const sut = new FindByTokenUserUseCase(useCase, provider);

    const token: string = "";

    const response = sut.execute(token);

    expect(response).toBeTruthy();
  });
});
