import { PrismaUserRepository } from "@/infra/repositories";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { VehicleMapper } from "../../../../application/mappers/vehicle-mapper";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { UpdateByTokenVehicleUseCase } from "./update-by-token-vehicle-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const vehicleRepository = new PrismaVehicleRepository();

    const sut = new UpdateByTokenVehicleUseCase(vehicleRepository);

    const dataSource: VehicleDto = {
      model: "",
      type: "AUTOMOBILE",
      brand: "",
      color: "",
      plate: "",
      userId: "",
      collegeId: "",
    };

    const userId: string = "";

    const response = sut.execute(dataSource, userId);

    expect(response).toBeTruthy();
  });
});
