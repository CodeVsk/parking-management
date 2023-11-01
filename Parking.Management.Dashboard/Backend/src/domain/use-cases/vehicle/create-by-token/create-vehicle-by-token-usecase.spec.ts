import { PrismaUserRepository } from "@/infra/repositories";
import { VehicleDto } from "../../../../application/dtos/vehicle-dto";
import { PrismaVehicleRepository } from "../../../../infra/repositories/prisma/vehicle-repository";
import { CreateVehicleByTokenUseCase } from "./create-vehicle-by-token-usecase";

describe("Create vehicle usecase", () => {
  it("Should be able to create a new vehicle", async () => {
    const vehicleRepository = new PrismaVehicleRepository();
    const userRepository = new PrismaUserRepository();
    const sut = new CreateVehicleByTokenUseCase(
      vehicleRepository,
      userRepository
    );

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
