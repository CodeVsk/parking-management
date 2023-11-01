import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { FindByIdTokenVehicleResponsibleUseCase } from "./find-by-id-token-vehicle-responsible-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const repository = new PrismaVehicleResponsibleRepository();
    const sut = new FindByIdTokenVehicleResponsibleUseCase(repository);

    const id: string = "123";
    const userId: string = "123";

    const response = sut.execute(id, userId);

    expect(response).toBeTruthy();
  });
});
