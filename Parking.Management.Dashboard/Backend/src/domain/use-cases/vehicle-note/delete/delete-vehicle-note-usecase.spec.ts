import { VehicleNoteDto } from "../../../../application/dtos/vehicle-note-dto";
import { VehicleNoteMapper } from "../../../../application/mappers/vehicle-note-mapper";
import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { DeleteVehicleNoteUseCase } from "./delete-vehicle-note-usecase";

describe("Create vehicleNote usecase", () => {
  it("Should be able to create a new vehicleNote", async () => {
    const mapper = new VehicleNoteMapper();
    const repository = new PrismaVehicleNoteRepository();
    const sut = new DeleteVehicleNoteUseCase(repository, mapper);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
