import { AuthProvider, QRCodeProvider } from "@/infra/providers";
import { UserDto } from "../../../../application/dtos/user-dto";
import { PrismaUserRepository } from "../../../../infra/repositories/prisma/user-repository";
import { CreateByUserIdUseCase } from "./create-by-userid-usecase";

describe("Create user usecase", () => {
  it("Should be able to create a new user", async () => {
    const repository = new PrismaUserRepository();
    const authProvider = new AuthProvider();
    const qrCodeProvider = new QRCodeProvider();

    const sut = new CreateByUserIdUseCase(
      repository,
      authProvider,
      qrCodeProvider
    );

    const token: string = "";

    const response = sut.execute(token);

    expect(response).toBeTruthy();
  });
});
