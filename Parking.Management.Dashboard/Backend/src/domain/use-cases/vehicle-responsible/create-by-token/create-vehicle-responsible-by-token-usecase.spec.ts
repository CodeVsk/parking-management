import {
  PrismaUserRepository,
  PrismaVehicleRepository,
} from "@/infra/repositories";
import { VehicleResponsibleDto } from "../../../../application/dtos/vehicle-responsible-dto";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { CreateVehicleResponsibleByTokenUseCase } from "./create-vehicle-responsible-by-token-usecase";

describe("Create vehicleResponsible usecase", () => {
  it("Should be able to create a new vehicleResponsible", async () => {
    const repository = new PrismaVehicleResponsibleRepository();
    const vehicleRepository = new PrismaVehicleRepository();
    const userRepository = new PrismaUserRepository();

    const sut = new CreateVehicleResponsibleByTokenUseCase(
      repository,
      vehicleRepository,
      userRepository
    );

    const dataSource: VehicleResponsibleDto = {
      userId: "",
      vehicleId: "",
    };

    const response = sut.execute(dataSource, dataSource.userId);

    expect(response).toBeTruthy();
  });
});
