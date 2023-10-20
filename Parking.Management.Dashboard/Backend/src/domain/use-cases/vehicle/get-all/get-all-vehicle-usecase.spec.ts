import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { GetAllVehicleUseCase } from "./get-all-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const repository = new PrismaVehicleRepository();
    const sut = new GetAllVehicleUseCase(repository);

    const response = sut.execute();

    expect(response).toBeTruthy();
  });
});
