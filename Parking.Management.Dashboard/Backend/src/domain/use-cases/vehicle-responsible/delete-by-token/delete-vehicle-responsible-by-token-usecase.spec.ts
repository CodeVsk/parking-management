import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { DeleteVehicleResponsibleByTokenUseCase } from "./delete-vehicle-responsible-by-token-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const repository = new PrismaVehicleResponsibleRepository();
    const sut = new DeleteVehicleResponsibleByTokenUseCase(repository);

    const id: string = "123";
    const userId: string = "";

    const response = sut.execute(id, userId);

    expect(response).toBeTruthy();
  });
});
