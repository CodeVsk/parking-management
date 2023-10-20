import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { LatestUpdatedGarageUseCase } from "./latest-updated-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new LatestUpdatedGarageUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
