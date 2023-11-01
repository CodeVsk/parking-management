import {
  PrismaUserRepository,
  PrismaVehicleRepository,
} from "@/infra/repositories";
import { PrismaVehicleResponsibleRepository } from "../../../../infra/repositories/prisma/vehicle-responsible-repository";
import { CreateVehicleResponsibleByTokenUseCase } from "./create-vehicle-responsible-by-token-usecase";
import { VehicleResponsibleUserDto } from "@/application/dtos/vehicle-responsible-user-dto";

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

    const dataSource: VehicleResponsibleUserDto = {
      enrollment: "",
      vehicleId: "",
      id: "",
    };

    const userId: string = "";

    const response = sut.execute(dataSource, userId);

    expect(response).toBeTruthy();
  });
});
