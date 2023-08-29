import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { UpdateVehicleNoteUseCase } from "./update-vehicle-note-usecase";

describe("Create vehicleNote usecase", () => {
  it("Should be able to create a new vehicleNote", async () => {
    const repository = new PrismaVehicleNoteRepository();
    const sut = new UpdateVehicleNoteUseCase(repository);

    const dataSource: VehicleNoteDto = {
      vehicleId: "",
      description: "",
    };

    const response = sut.execute(dataSource);

    expect(response).toBeTruthy();
  });
});
