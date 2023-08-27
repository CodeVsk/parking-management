import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { DeleteVehicleResponsibleUseCase } from "./delete-vehicle-responsible-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const repository = new PrismaVehicleResponsibleRepository();
    const sut = new DeleteVehicleResponsibleUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
