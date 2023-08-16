import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { AuthLoginUseCase } from "./auth-login-usecase";
import { AuthProvider } from "@/infra/providers";
import { UserLoginDto } from "@/application/dtos";

describe("Auth user usecase", () => {
  it("Should be able to auth account user", async () => {
    const provider = new AuthProvider();
    const repository = new PrismaUserRepository();
    const sut = new AuthLoginUseCase(provider, repository);

    const dataSource: UserLoginDto = {
      email: "",
      password: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
