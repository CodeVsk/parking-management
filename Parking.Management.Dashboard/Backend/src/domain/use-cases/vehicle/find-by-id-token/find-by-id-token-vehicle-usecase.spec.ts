import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { FindByIdTokenVehicleUseCase } from "./find-by-id-token-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const repository = new PrismaVehicleRepository();
    const sut = new FindByIdTokenVehicleUseCase(repository);

    const id: string = "123";
    const userId: string = "";

    const response = sut.execute(id, userId);

    expect(response).toBeTruthy();
  });
});
