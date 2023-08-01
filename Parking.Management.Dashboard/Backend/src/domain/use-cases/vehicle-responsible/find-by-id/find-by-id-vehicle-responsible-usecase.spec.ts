import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { FindByIdVehicleResponsibleUseCase } from "./find-by-id-vehicle-responsible-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const mapper = new VehicleResponsibleMapper();
    const repository = new PrismaVehicleResponsibleRepository();
    const sut = new FindByIdVehicleResponsibleUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
