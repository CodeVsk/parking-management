import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { AuthValidateUseCase } from "./auth-validate-usecase";
import { AuthProvider } from "@/infra/providers";
import { AuthenticatedDto, UserLoginDto } from "@/application/dtos";

describe("Auth user usecase", () => {
  it("Should be able to auth account user", async () => {
    const provider = new AuthProvider();
    const repository = new PrismaUserRepository();
    const sut = new AuthValidateUseCase(provider, repository);

    const dataSource: AuthenticatedDto = {
      token: "",
      userId: "",
      role: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
