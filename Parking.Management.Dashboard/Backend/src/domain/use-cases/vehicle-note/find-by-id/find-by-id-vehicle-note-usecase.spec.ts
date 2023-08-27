import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { FindByIdVehicleNoteUseCase } from "./find-by-id-vehicle-note-usecase";

describe("Create vehicleNote usecase", () => {
  it("Should be able to create a new vehicleNote", async () => {
    const repository = new PrismaVehicleNoteRepository();
    const sut = new FindByIdVehicleNoteUseCase(repository);

    const id: string = "123";

    const response = sut.execute(id);

    expect(response).toBeTruthy();
  });
});
