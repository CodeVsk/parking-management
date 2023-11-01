import { PrismaVehicleNoteRepository } from "../../../../infra/repositories/prisma/vehicle-note-repository";
import { FindByIdTokenVehicleNoteUseCase } from "./find-by-id-token-vehicle-note-usecase";

describe("Create vehicleNote usecase", () => {
  it("Should be able to create a new vehicleNote", async () => {
    const repository = new PrismaVehicleNoteRepository();
    const sut = new FindByIdTokenVehicleNoteUseCase(repository);

    const id: string = "123";
    const userId: string = "123";

    const response = sut.execute(id, userId);

    expect(response).toBeTruthy();
  });
});
