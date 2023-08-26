import { PrismaGarageRepository } from "../../../../infra/repositories/prisma/garage-repository";
import { DeleteGarageUseCase } from "./delete-garage-usecase";

describe("Create garage usecase", () => {
  it("Should be able to create a new garage", async () => {
    const repository = new PrismaGarageRepository();
    const sut = new DeleteGarageUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
