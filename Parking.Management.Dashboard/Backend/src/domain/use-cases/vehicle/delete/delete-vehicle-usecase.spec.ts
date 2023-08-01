import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { DeleteVehicleUseCase } from "./delete-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const mapper = new VehicleMapper();
    const repository = new PrismaVehicleRepository();
    const sut = new DeleteVehicleUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
