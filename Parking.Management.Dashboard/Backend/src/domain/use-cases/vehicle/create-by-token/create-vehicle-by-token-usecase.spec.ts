import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { CreateVehicleUseCase } from "./create-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const repository = new PrismaVehicleRepository();
    const sut = new CreateVehicleUseCase(repository);

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
