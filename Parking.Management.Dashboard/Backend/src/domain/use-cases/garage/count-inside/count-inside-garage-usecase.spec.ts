import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { CountInsideGarageUseCase } from "./count-inside-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new CountInsideGarageUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
