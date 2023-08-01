import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { UpdateVehicleUseCase } from "./update-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const mapper = new VehicleMapper();
    const repository = new PrismaVehicleRepository();
    const sut = new UpdateVehicleUseCase(repository, mapper);

    const dataSource: VehicleDto = {
      model: "",
      type: "",
      plate: "",
      userId: "",
      collegeId: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
