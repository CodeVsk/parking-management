import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { VehicleResponsibleMapper } from "../../../../application/mappers/vehicle-responsible-mapper";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { CreateVehicleResponsibleUseCase } from "./create-vehicle-responsible-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const mapper = new VehicleResponsibleMapper();
    const repository = new PrismaVehicleResponsibleRepository();
    const sut = new CreateVehicleResponsibleUseCase(repository, mapper);

    const dataSource: VehicleResponsibleDto = {
      userId: "",
      vehicleId: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
