import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { GetAllGarageUseCase } from "./get-all-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new GetAllGarageUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
